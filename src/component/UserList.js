import React, { useState} from "react"
import User from "./Users"


function UserList(props) {
    return (
      <div>
        {props.data.map((user) => {
            return (
            <User
              user={user}
              key={user.id}
              deleteUser={props.deleteUser}
              editUser={props.editUser}
            />
          );
        })}
      </div>
    );
  }
  
  export default UserList;

            