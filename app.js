const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express()
const { API_VERSION } = require("./config")
app.use(cors())

// Rutas
const userRoutes = require("./routers/user")
const authRoutes = require("./routers/auth")

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Headers http

//Rutas Basicas
app.use(`/api/${API_VERSION}`, userRoutes)
app.use(`/api/${API_VERSION}`, authRoutes)

module.exports = app;