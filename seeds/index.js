const { sequelize } = require('../db/connect');
const Client = require('../model/client');
const Chargeur = require('../model/chargeur');
const Consigne = require('../model/consigne');
const Destination = require('../model/destination');
const Pesee = require('../model/pesee');
const Profil = require('../model/profil');
const Train = require('../model/train');
const User = require('../model/user');
const Wagon = require('../model/wagon');

const seedDB = async() => {
    try {
        console.log('Starting seeding...');

        // 1. Profils
        await Profil.bulkCreate([
            { designation: 'Admin' },
            { designation: 'Manager' },
            { designation: 'Operator' }
        ]);

        // 2. Users
        await User.bulkCreate([
            { nom: 'admin', profil: 1, password: '$2b$10$K.ExampleHashForAdmin1234567890abcdef' },
            { nom: 'manager', profil: 2, password: '$2b$10$K.ExampleHashForManager1234567890abcdef' },
            { nom: 'operator', profil: 3, password: '$2b$10$K.ExampleHashForOp1234567890abcdef' }
        ]);

        // 3. Clients
        await Client.bulkCreate([
            { designation: 'Client A Corp' },
            { designation: 'Client B Ltd' },
            { designation: 'Client C SA' }
        ]);

        // 4. Destinations
        await Destination.bulkCreate([
            { designation: 'Paris' },
            { designation: 'Lyon' },
            { designation: 'Marseille' }
        ]);

        // 5. Chargeurs
        await Chargeur.bulkCreate([
            { designation: 'Chargeur 1' },
            { designation: 'Chargeur 2' },
            { designation: 'Chargeur 3' }
        ]);

        // 6. Trains
        await Train.bulkCreate([
            { nom_interne: 'T001', nb_locomotive: 2 },
            { nom_interne: 'T002', nb_locomotive: 1 }
        ]);

        // 7. Wagons (noTag BIGINT)
        await Wagon.bulkCreate([
            { noTag: BigInt(1001), tare: 20 },
            { noTag: BigInt(1002), tare: 22 },
            { noTag: BigInt(1003), tare: 21 }
        ]);

        // 8. Consignes
        await Consigne.bulkCreate([
            { designation: 'Fragile' },
            { designation: 'Urgent' },
            { designation: 'Standard' }
        ]);

        // 9. Pesees (match FKs from model: DestinationCode, ClientCode, ChargeurCode, noTagWagon, noInterneTrain, consigneId)
        await Pesee.bulkCreate([{
                poidBrute: 50,
                poidNet: 30,
                DestinationCode: 1,
                ClientCode: 1,
                ChargeurCode: 1,
                noTagWagon: BigInt(1001),
                noInterneTrain: 1,
                consigneId: 1
            },
            {
                poidBrute: 55,
                poidNet: 33,
                DestinationCode: 2,
                ClientCode: 2,
                ChargeurCode: 2,
                noTagWagon: BigInt(1002),
                noInterneTrain: 1,
                consigneId: 2
            },
            {
                poidBrute: 48,
                poidNet: 27,
                DestinationCode: 3,
                ClientCode: 3,
                ChargeurCode: 3,
                noTagWagon: BigInt(1003),
                noInterneTrain: 2,
                consigneId: 3
            }
        ]);

        await sequelize.sync({ alter: true });
        console.log('Seeding complete!');
    } catch (error) {
        console.error('Seeding failed:', error);
    } finally {
        await sequelize.close();
    }
};

seedDB();