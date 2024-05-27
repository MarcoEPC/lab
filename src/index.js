const express = require("express")
const path = require('path');
const bodyParser = require("body-parser")
const session = require("express-session")
const connection = require("./database/database")
const dotenvPath = path.resolve(__dirname, '../../.env')
require('dotenv').config({ path: dotenvPath })

const User = require('./models/User')
const Projetos = require("./models/Projeto")
const Bolsas = require("./models/Bolsa")
const Parceiro = require("./models/Parceiro")

//User.sync({ force: true });
//Projetos.sync({ force: true });
//Bolsas.sync({ force: true });


const app = express()

app.set("view engine", "ejs")
app.use(session({
	secret: process.env.SECRET_KEY,
	cookie: { maxAge: 480000 },
	resave: true,
	saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const usersController = require("./controllers/usersController")
const adminController = require("./controllers/adminController")
const homeController = require("./controllers/homeController")
const bolsaController = require("./controllers/bolsaController")
const projetoController = require("./controllers/projetoController")
const parceiroController = require("./controllers/parceiroController")

app.use('/', homeController)
app.use('/', usersController)
app.use('/', adminController)
app.use('/', bolsaController)
app.use('/', projetoController)
app.use('/', parceiroController)

app.listen(8080, () => {
	console.log("ok")
})
