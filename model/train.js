const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect.js");
const User = require("./user.js")

class Train extends Model {}

Train.init({
    no_interne: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom_interne: { type: DataTypes.STRING },
    nb_locomotive: { type: DataTypes.INTEGER }
}, { sequelize })

Train.Profil = Train.belongsTo(User)
module.exports = Train