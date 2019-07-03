const express = require('express')
const app = express()
var cors = require('cors')
var bookController = require('./controller/bookController')

//app.use(express.static('public'))
app.use(cors())
app.set('view engine', 'ejs')
app.get('/', bookController.index)
app.get('/books', bookController.showBooks)

module.exports = app

