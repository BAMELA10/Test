const Sequelize = require("sequelize")
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize.Sequelize(
    process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
        host: process.env.HOST,
        port: process.env.DATABASE_PORT,
        dialect: "mssql",
        logging: false,
        dialectOptions: {
            options: {
                encrypt: true,
                trustServerCertificate: true,
            }
        }
    })

const connectDB = () => {
    sequelize.authenticate()
        .then(() => console.log("database connected"))
        .catch(() => console.log("database unconnected"))
}

module.exports = { connectDB, sequelize };