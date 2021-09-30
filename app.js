const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const { API_VERSION } = require("./config")

// Rutas

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Headers http

//Rutas Basicas

module.exports = app;