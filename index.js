const express = require("express");
const jwt = require("jsonwebtoken");

const App = express();

const errorsHandler = (err, req, res, next) =>
{
    console.log(err.stack)
    res.status(500).json({message: `errors stack [${err.stack}]`})
}

App.use(errorsHandler)
App.listen(5000, () => {
    console.log("SERVER HAS BEEN STARTING")
})