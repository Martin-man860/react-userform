import React, { useState } from "react"
import { Form,Button } from "react-bootstrap";
import { connect } from "react-redux"
import { editUser } from "../actions/UserActions"

function EditUserForm(props) {
    const [name,setName] = useState(props.user.name.name)
    const [email,setEmail] = useState(props.user.email)
   

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    


    function handleSubmit() {
        let editedUser = {
            name: name,
            email: email,
            id: props.user.id,
        };

        props.editedUser(editedUser, props.user.id)
        props.toggleModel();
    }

    return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => handleNameChange(e)}
            />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            <Button onClick={() => handleSubmit()}>Save</Button>
          </Form.Group>
        </Form>
      );
}

const mapDispatchToProps = {
  editUser
}

export default connect(null, mapDispatchToProps)(EditUserForm);