const { Sequelize, DataTypes } = require('sequelize')
const connection = require('../database/database')

const Bolsas= connection.define('Bolsas', {
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Descricao: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Area: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Objetivo: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Plano: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Local: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Duracao: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Condicoes: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Criterios: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Juri: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Prazo: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Resultados: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    Imagem: {
        type: DataTypes.STRING,
        allowNull:false
    }
}, {
    timestamps:true
});

module.exports = Bolsas