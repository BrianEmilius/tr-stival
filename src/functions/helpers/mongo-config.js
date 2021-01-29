const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-mfsmy.azure.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

const connection = async () => mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
	username: mongoose.SchemaTypes.String,
	password: mongoose.SchemaTypes.String
});

const User = mongoose.model("User", userSchema);

(async () => {
	if (await User.findOne({ where: { username: "admin" } })) return;

	const admin = await User.create({ username: "admin", password: "1234" });
	admin.save();
})();

exports.User = User;
exports.db = connection;
