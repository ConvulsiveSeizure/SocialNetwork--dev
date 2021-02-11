const express = require("express");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const User = require("./models/User")

const App = express();

App.use(express.json({type: "application/json"}))

const errorsHandler = (err, req, res, next) =>
{
    console.log(err.stack)
    res.status(500).json({message: `errors stack [${err.stack}]`})
}


App.post("/login", async (req, res) => {
    const {phoneNumber, password} = req.body
    const findUser = await User.findOne({phone_number: phoneNumber}).exec();
    const token = jwt.sign({username: findUser.username}, "secretHashKey", {algorithm: "HS256"})
    res.status(200).json({message: "/login", userData: findUser, token: token})
})

App.post("/register", (req, res) => {
    const {username, password, phoneNumber} = req.body
    const newUser = new User({username: username, password: password, phone_number: phoneNumber})
    newUser.save()
    const token = jwt.sign({username, password, phoneNumber}, "secretHashKey", {algorithm: "HS256"})
    res.status(200).json({message: "/register", token: token})
})

App.post("/getdata", async (req, res) => {
    const oldToken = req.body.token
    const usernameFromToken = jwt.verify(oldToken, "secretHashKey", {algorithm: "HS256"})
    console.log(usernameFromToken)
    const getExistUser = await User.findOne({username: usernameFromToken.username}).exec();
    res.status(200).json({message: "/getData", userData: getExistUser})
})


App.use(errorsHandler)

async function RunServer() {
    try {
        ///
        await mongoose.connect("mongodb+srv://Admin:Admin@socialnetwork.5cewl.mongodb.net/SocialNetwork?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }).then(
            App.listen(5000, () => {
            console.log("SERVER HAS BEEN STARTING")
        }))
        
        ///

    }
    catch (error) {
        console.log("error", error)
    }
}
RunServer()