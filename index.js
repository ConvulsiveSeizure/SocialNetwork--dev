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


App.post("/login", (req, res) => {
    res.status(200).json({message: "/login"})
})

App.post("/register", (req, res) => {
    const {username, password, phoneNumber} = req.body
    const newUser = new User({username: username, password: password, phone_number: phoneNumber})
    newUser.save()
    const token = jwt.sign({username, password, phoneNumber}, "", {algorithm: "HS256"})
    res.status(200).json({message: "/register", token: token})
})

App.post("/getdata", (req, res) => {
    const oldToken = req.body.token
    const usernameFromToken = jwt.verify(oldToken, "", {algorithm: "HS256"})
    const getExistUser = User.findOne({username: usernameFromToken})
    res.status(200).json({message: "/getData", userData: getExistUser._conditions.username})
})


App.use(errorsHandler)

async function RunServer() {
    try {
        ///
        await mongoose.connect("", {
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