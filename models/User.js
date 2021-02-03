import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    id: Schema.Types.ObjectId,
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

export const User = model("User", UserSchema)