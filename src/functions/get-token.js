const mongoose = require("mongoose");
const co = require("co");

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-mfsmy.azure.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
let conn = null;

exports.handler = function(event, context, callback) {
	context.callbackWaitsForEmptyEventLoop = false;

	if (event.httpMethod.toLowerCase() !== "post") {
		callback(null, {
			statusCode: 405,
			body: "Method not allowed"
		});
	}

	run(JSON.parse(event.body).username)
		.then(res => callback(null, res))
		.catch(error => callback(error));
}

function run(username) {
	return co(function*() {
		if (conn == null) {
			conn = yield mongoose.createConnection(uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			});
			conn.model("User", new mongoose.Schema({
				username: mongoose.SchemaTypes.String,
				password: mongoose.SchemaTypes.String
			}));
		}

		const User = conn.model("User");

		const doc = yield User.findOne({ where: { username } });

		conn.close(function() {
			console.log("mongo connection terminated");
		});

		const response = {
			statusCode: 200,
			body: JSON.stringify(doc)
		};

		return response;
	});
}
