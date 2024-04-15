const Sequelize = require('sequelize')
const connection = require('../database/database')

const User = connection.define('users', {
    Nome: {
        type: Sequelize.STRING,
        allowNull:false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull:false
    },
    Password: {
        type: Sequelize.STRING,
        allowNull:false
    }
})

User.sync({force:false})

module.exports=User