const express = require('express')

const notesRouter = require('./notes')

const app = express()

app.use('/notes')

module.exports = app