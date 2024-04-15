const Sequelize = require("sequelize")
const path = require("path")
const dotenvPath=path.resolve(__dirname,'../../.env')
require('dotenv').config({ path: dotenvPath })

const connection = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql"
})

module.exports = connection