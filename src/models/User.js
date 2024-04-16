const { Sequelize, DataTypes } = require('sequelize')
const connection = require('../database/database')

const User = connection.define('users', {
    Nome: {
        type: DataTypes.STRING,
        allowNull:false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Password: {
        type: DataTypes.STRING,
        allowNull:false
    },
}, {
    timestamps:true
})

module.exports = User