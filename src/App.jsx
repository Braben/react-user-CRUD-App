import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/userList";
import { v4 as uuid } from "uuid"; //add uuid packages - yarn add uuid

function App() {
  const [users, setUsers] = useState([
    { fullName: "Benjamin", email: "ben@mail.com", id: uuid() },
  ]);

  //function to add  a newuser
  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  // console.log(users);

  // edit user details function
  const editUser = (userId, newUserDetails) => {
    //console.log(userId, newUserDetails);
    let arr = users.map((user) => {
      if (user.id === userId) {
        return newUserDetails;
      } else {
        return user;
      }
    });
    setUsers(arr); //updates the userdetails finally
  };

  //delete user function
  const deleteUser = (userId) => {
    // console.log(userId);
    let filteredUser = users.filter((user) => {
      if (user.id !== userId) {
        return user;
      }
    });
    setUsers(filteredUser);
  };

  return (
    <div className="container">
      {/* adding props and passing functions */}
      <UserList editUser={editUser} deleteUser={deleteUser} users={users} />
      {/* passed new user a prop  */}
      <UserForm addUser={addNewUser} />
    </div>
  );
}
export default App;
