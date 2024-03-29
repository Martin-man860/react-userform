import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signInWithEmail, signInWithGoogle } from "../actions/AuthActions";

const Login = (props) => {
	if (!props.auth.isLoaded) return null;
	if (!props.auth.isEmpty) props.history.push("/");

	const handleSubmit = (e) => {
		e.preventDefault();
		let email = e.target.elements.email.value;
		let password = e.target.elements.password.value;
	    	props.signInWithEmail(email, password);
	};
	return (
		
			<form onSubmit={handleSubmit}>
				<h1>login here</h1>
				<div>
					<label>Email</label>
					<input type="email" name="email" />
				</div>
				<div>
					<label>password</label>
					<input type="password" name="password" />
				</div>
				<button>login here</button>
				<hr></hr>
				<Link to="/register">Don't have an account? Sign up</Link>
				<button onClick={props.signInWithGoogle}>sign in with google</button>
			</form>
		
	);
};
const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
	};
};

const mapDispatchToProps = {
	signInWithEmail,
	signInWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);