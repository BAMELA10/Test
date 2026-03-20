const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect");

class Wagon extends Model {}

Wagon.init({
    noTag: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true, },
    tare: { type: DataTypes.INTEGER },
}, { sequelize })

module.exports = Wagon