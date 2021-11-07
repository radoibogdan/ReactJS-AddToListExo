import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const userAddedHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    });
  }

  return (
    // Use Fragment or <> to not be forced to use DIV wrapper
    // Can replace with <React.Fragment></React.Fragment>
    <>
      <AddUser onAddUser={userAddedHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
