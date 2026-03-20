const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect.js");

class Client extends Model {}

Client.init({
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    designation: { type: DataTypes.STRING },
}, { sequelize })

module.exports = Client