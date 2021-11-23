import React from "react";
import { useState, useEffect } from "react";
import UserForm from "../component/UserForm";
import UserList from "../component/UserList";
import { signOut } from "../actions/AuthActions";
import { connect } from "react-redux";
import {getAllUsers} from "../actions/UserActions"
import {Button} from "react-bootstrap"

function Home(props) {
	const [users, setUsers] = useState([]);
	useEffect(()=>{
		props.getAllUsers();
	},[])

	return(
		<div>
			<UserForm/>
			<UserList/>
			<br/>
			<Button onClick={props.signOut}>Sign Out</Button>
		</div>
	)

}

const mapDispatchToProps = {
	getAllUsers,signOut
};

export default connect(null, mapDispatchToProps)(Home);