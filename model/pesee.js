const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../db/connect.js");
const Chargeur = require('./chargeur.js');
const Client = require('./client.js');
const Destination = require('./destination.js');
const Train = require('./train.js');
const Wagon = require('./wagon.js');
const Consigne = require('./consigne.js');


class Pesee extends Model {}

Pesee.init({
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    poidBrute: { type: DataTypes.INTEGER },
    poidNet: { type: DataTypes.INTEGER }
}, { sequelize })

Pesee.destination = Pesee.belongsTo(Destination, { foreignKey: "DestinationCode" })
Pesee.client = Pesee.belongsTo(Client, { foreignKey: "ClientCode" })
Pesee.chargeur = Pesee.belongsTo(Chargeur, { foreignKey: "ChargeurCode" })
Pesee.wagon = Pesee.belongsTo(Wagon, { foreignKey: "noTagWagon" })
Pesee.train = Wagon.belongsTo(Train, { foreignKey: "noInterneTrain" })
Pesee.consigne = Pesee.belongsTo(Consigne, { foreignKey: "consigneId" })

Destination.hasMany(Pesee, {
    foreignKey: "DestinationCode",
    onDelete: 'CASCADE'
})
Client.hasMany(Pesee, {
    foreignKey: "ClientCode",
    onDelete: 'CASCADE'
})
Chargeur.hasMany(Pesee, {
    foreignKey: "ChargeurCode",
    onDelete: 'CASCADE'
})
Wagon.hasMany(Pesee, {
    foreignKey: "noTagWagon",
    onDelete: 'CASCADE'
})
Train.hasMany(Pesee, {
    foreignKey: "noInterneTrain",
    onDelete: 'CASCADE'
})
Consigne.hasOne(Pesee, {
    foreignKey: "consigneId",
    onDelete: 'CASCADE'
})
module.exports = Pesee