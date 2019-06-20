const express = require('express')
const app = express()
var bookController = require('./controller/bookController')

//app.use(express.static('public'))
app.set('view engine', 'ejs')
app.get('/', bookController.index)
app.get('/books', bookController.showBooks)

module.exports = app

