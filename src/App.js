import React,{useState} from 'react';
import './App.css';
import User from "./component/Users.js"
import UserList from "./component/UserList"
import UserForm from "./component/UserForm"



function App() {

const [users,setUser] = useState([]);

function addUser(user) {
  setUser([{...users},user]);
}




  return (
    <div className="App">
      <UserForm addUser={addUser}/>
      <UserList data={users}/>
    </div>
  );
}
export default App;
 