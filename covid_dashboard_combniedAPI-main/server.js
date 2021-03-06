if(process.env.NODE_ENV !== 'production')
{
    require('dotenv').config()
}
const http = require('http')
const app = require ('./app')
const port = process.env.PORT || 3000

const expressLayouts= require('express-ejs-layouts')
const server =http.createServer(app)

/*
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(express.static('public'))
app.use(expressLayouts) 

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require ('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error =>console.error(error))
db.once('open', () =>console.log('Connected to Mongoose'))
*/
const indexRouter = require('./routes/public/stats')

server.listen(port)