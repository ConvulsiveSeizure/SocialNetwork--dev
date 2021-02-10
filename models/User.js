const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    create_date: Date,
    phone_number: String,
    //
    username: String,
    password: String,
    first_name: String,
    last_name: String,
    avatar: String,
    //
    followers: [{username: String, id: String}],
    follows: [{username: String, id: String}],
});
const User = mongoose.model("User", UserSchema)
module.exports = User;
