const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect.js");


class Consigne extends Model {}

Consigne.init({
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    designation: { type: DataTypes.STRING },
}, { sequelize })


module.exports = Consigne