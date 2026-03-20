const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect.js");
const Profil = require("./profil.js")

class User extends Model {}

User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING },
}, {
    sequelize,
    indexes: [{
        unique: true,
        fields: ['nom'],
    }, ],
})

User.Profil = User.belongsTo(Profil, { foreignKey: "ProfilCode" })

Profil.hasMany(User, {
    foreignKey: "ProfilCode",
    onDelete: 'CASCADE'
})
module.exports = User