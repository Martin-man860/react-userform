import React,{useState} from 'react';
import './App.css';
import User from "./component/Users.js"
import UserList from "./component/UserList"


function App() {

const [users,setUser] = useState([]);

function addUser(user) {
  setUser([{...users},user]);
}




  return (
    <div className="App">
      <User addUser={addUser}/>
      <UserList data={users}/>
    </div>
  );
}
export default App;
