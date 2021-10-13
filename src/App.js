import React,{useState} from 'react';
import './App.css';
import UserList from "./component/UserList"
import UserForm from "./component/UserForm"



function App() {

const [users,setUsers] = useState([]);

function editUser(newDetails,userId) {
  const editedUser = users.map((users)=> {
    if (userId === users.id) {
      return newDetails;
    } else {
      return users;
    }
  });

  setUsers(editedUser)
}

function deleteUser(userId) {
  const filteredUsers = users.filter((users)=> {
    return userId !== users.id;
  });

  setUsers(filteredUsers)
}


  return (
    <div className="App">
      <UserForm/>
      <UserList deleteUser={deleteUser} editUser={editUser}/>
    </div>
  );
}
export default App;
 