const { Sequelize, DataTypes } = require('sequelize')
const connection = require('../database/database')

const Projetos= connection.define('Projetos', {
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Autor: {
        type: DataTypes.STRING,
        allowNull:false
    },
    Descricao: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Categorias: {
        type: DataTypes.JSON,
        allowNull:false
    }
}, {
    timestamps:true
})

module.exports = Projetos