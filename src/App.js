// import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import UserForm from "./component/UserForm";
// import { Container, Row, Col } from "react-bootstrap";
// import UserList from "./component/UserList";
import { getAllUsers } from "./actions/UserActions";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Logins from "./Pages/Logins";


function App(props) {

// const [users,setUsers] = useState([]);
// useEffect(()=> {
//   props.getAllUsers();
// },[]);

// function addUser(user) {
//   //makes a copy of the current users state
//   //and add a new user.
//   setUsers([...users, user]);
// }

// function editUser(newDetails,userId) {
//   const editedUser = users.map((users)=> {
//     if (userId === users.id) {
//       return newDetails;
//     } else {
//       return users;
//     }
//   });

//   setUsers(editedUser)
// }

// function deleteUser(userId) {
//   const filteredUsers = users.filter((users)=> {
//     return userId !== users.id;
//   });

//   setUsers(filteredUsers)
// }


  return (
      <BrowserRouter>
        <ProtectedRoute exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/logins" component={Logins} />
      </BrowserRouter>   
    



    // <div className="App">
    //   <UserForm/>
    //   <UserList deleteUser={deleteUser} editUser={editUser}/>
    // </div>
  );
}
const mapDispatchToProps = {
	getAllUsers
};

export default connect(null, mapDispatchToProps)(App);