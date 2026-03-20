const express = require("express")
const app = express()
const { connectDB } = require("./db/connect")
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '.env') });

const Client = require('./model/client')
const User = require('./model/user')
const Destination = require('./model/destination')
const Profil = require('./model/profil')
const Chargeur = require('./model/chargeur')
const Pesee = require('./model/pesee')
const Consigne = require('./model/consigne')
const Train = require('./model/train')
const Wagon = require('./model/wagon')

const { routes } = require("./router/router")


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.use("/api", routes)

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

async function syncDB() {
    try {
        await Client.sync({ alter: true })
        await Profil.sync({ alter: true })
        await Chargeur.sync({ alter: true })
        await Consigne.sync({ alter: true })
        await Destination.sync({ alter: true })
        await User.sync({ alter: true })
        await Train.sync({ alter: true })
        await Wagon.sync({ alter: true })
        await Pesee.sync({ alter: true })

        console.log('Tables synchronisées');
    } catch (error) {
        console.error('Erreur de synchronisation :', error);
    }
}



async function start() {
    await connectDB();
    await syncDB();

    app.listen(process.env.PORT, () => {
        console.log(`Serveur lancé sur http://localhost:${process.env.PORT}`)

    })
}

start()