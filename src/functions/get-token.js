exports.handler = function(event, context, callback) {
	if (event.httpMethod.toLowerCase() !== "post") {
		return callback(null, {
			statusCode: 405
		});
	}

	callback(null, {
		statusCode: 200,
		body: "Hello"
	});
}