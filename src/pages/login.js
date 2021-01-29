import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import Container from "../components/container";
import "./login.css";

export default function Login() {
	function submitForm(event) {
		event.preventDefault();
		axios.post("/.netlify/functions/get-token", {
				username: event.target.username.value,
				password: event.target.password.value
			})
			.then(res => console.log(res));
	}

	return (
		<Container>
			<Helmet title="Login | Trøstival" />
			<h1>Login</h1>
			<form onSubmit={submitForm}>
				<label htmlFor="username">
					Brugernavn
					<input type="text" name="username" id="username" />
				</label>
				<label htmlFor="password">
					Adgangskode
					<input type="password" name="password" id="password" />
				</label>
				<button type="submit">Log in</button>
			</form>
		</Container>
	)
}
