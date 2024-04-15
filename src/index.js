const express = require("express")
const path = require('path');
const bodyParser = require("body-parser")
const session=require("express-session")
const connection = require("./database/database")
const User = require("./models/User")

const app=express()
app.set("view engine", "ejs")
app.use(session({
	secret: "eraumavezumanimalmuitogrande",
	cookie: { maxAge: 480000 },
	resave: true,
  	saveUninitialized: true
}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const usersController = require("./controllers/usersController")
const adminController = require("./controllers/adminController")
const homeController = require("./controllers/homeController")

app.use('/',homeController)
app.use('/',usersController)
app.use('/',adminController)

app.listen(8080,()=>{
	console.log("ok")
})
