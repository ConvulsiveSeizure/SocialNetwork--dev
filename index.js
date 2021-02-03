const express = require("express");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");

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
    res.status(200).json({message: "/register"})
})

App.post("/getdata", (req, res) => {
    res.status(200).json({message: "/getData", username: "USERNAME", password: "PASSWORD"})
})


App.use(errorsHandler)

async function RunServer() {
    try {
        ///
        await mongoose.connect("mongoUrl", {
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