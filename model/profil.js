const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect.js");

class Profil extends Model {}

Profil.init({
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    designation: { type: DataTypes.STRING },
}, { sequelize })

module.exports = Profil