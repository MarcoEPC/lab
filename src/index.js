const express = require("express")
const path = require('path');

const app=express()
const bodyParser = require("body-parser")
//const connection = require("./database/database")
const routes = require("./routes/routes")

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/',routes)


app.listen(8080,()=>{
	console.log("servidor ok")
})
