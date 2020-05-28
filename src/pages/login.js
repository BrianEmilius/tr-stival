import React from "react";

export default function Login() {
	function submitForm(event) {
		event.preventDefault();
		fetch("/.netlify/functions/get-token", {
			method: "POST",
			body: JSON.stringify({
				username: event.target.username.value,
				password: event.target.password.value
			})
		})
			.then(res => res.text())
			.then(res => console.log(res));
	}

	return (
		<form onSubmit={submitForm}>
			<input type="text" name="username" />
			<input type="password" name="password" />
			<button type="submit">Log in</button>
		</form>
	)
}