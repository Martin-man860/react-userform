import React, {useState} from "react";
import { v4 as uuid } from "uuid";


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

            props.addUser(newUser);

            setName("")
            setEmail("")
            
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <br/>
        <br/>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <br/>
       
            <input type="submit"/>
        </form>
    );
}

export default UserForm;