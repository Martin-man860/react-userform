import React, {useState} from "react"
import { Button, Modal } from "react-bootstrap"
import EditUserForm from "./EditUserForm"
import { connect } from "react-redux"
import {deleteUser} from "../actions/UserActions"

function User (props) {
   const user = props.user;
   
   const [showModal,setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal)
  }  

    return (
      <div>

      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
    
      
    
      <Button variant="primary" onClick={() => toggleModal()}>
        Edit
      </Button>
      <Button variant="danger" onClick={() => props.deleteUser(user.id)}>
        Delete
      </Button>

      
      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
          <EditUserForm
            user={user}
            editUser={props.editUser}
            toggleModal={toggleModal}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  
}

const mapDispatchToProps = {
	deleteUser,
};

export default connect(null, mapDispatchToProps)(User);





// const [name,setName] = useState("");
// const [email,setEmail] = useState("");
// const [gen,setGen] = useState("")

// function handleSubmit(e) {
//     e.preventDefault();
    
//     let user = {
//         name: name,
//         email: email,
//         gen: gen,
//     };

//     props.addUser(user);
//     setName("")
//     setEmail("")
//     setGen("")

