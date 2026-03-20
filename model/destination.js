const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect.js");

class Destination extends Model {}

Destination.init({
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    designation: { type: DataTypes.STRING },
}, { sequelize })

module.exports = Destination