const express = require("express")

const app=express()
const bodyParser = require("body-parser")
//const connection = require("./database/database")
const routes = require("./routes/routes")

app.set("view engine", "ejs")
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/",routes)

app.listen(8080,()=>{
	console.log("servidor ok")
})
