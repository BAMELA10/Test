const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect.js");

class Chargeur extends Model {}

Chargeur.init({
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    designation: { type: DataTypes.STRING },
}, { sequelize })

module.exports = Chargeur