const { Sequelize, DataTypes } = require('sequelize')
const connection = require('../database/database')

const Projetos = connection.define('Parceiros', {
    Nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    timestamps: true
})

module.exports = Projetos