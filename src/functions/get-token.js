exports.handler = function(event, context, callback) {
	if (event.httpMethod.toLowerCase() !== "post") {
		return callback(null, {
			statusCode: 405
		});
	}

	let username = event.body.username;
	let password = event.body.password;

	console.log(username, password);

	callback(null, {
		statusCode: 200,
		body: event.body
	});
}
