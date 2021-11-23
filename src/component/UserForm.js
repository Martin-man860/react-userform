import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import {addUser} from "../actions/UserActions"
import { connect } from "react-redux"


function UserForm(props) {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
  


    function handleSubmit(e) {
        e.preventDefault();

        if (email && name ) {
            let newUser = {
                name: name,
                email: email,  
                id: uuid(),
            };

            props.addNewUser(newUser);

            setName("")
            setEmail("")
            
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Fullname" value={name} onChange={(e) => setName(e.target.value)}/>
        <br/>
        <br/>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <br/>
       
            <input type="submit" className="submit"/>
        </form>
    );
}

const mapDispatchToProps = {
    addNewUser: addUser,
}

export default connect(null,mapDispatchToProps) (UserForm);