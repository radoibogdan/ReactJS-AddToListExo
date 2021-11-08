import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // Ref returns undefiend by default
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(); // initial value = undefined

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge      = ageInputRef.current.value;
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title   : "Invalid input",
        message : "Please enter a valid age and name (non empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title   : "Invalid age",
        message : "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value  = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref = {nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref = {ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
