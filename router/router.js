const express = require("express");
const routes = express.Router()
const clientController = require("../controller/clientController")
const chargeurController = require("../controller/chargeurController")
const destinationController = require("../controller/destinationController")
const profilController = require("../controller/profilController")
const wagonController = require("../controller/wagonController")
const userController = require("../controller/userController")
const peseeController = require("../controller/peseeController")
const consigneController = require("../controller/consigneController")
const trainController = require("../controller/trainController")

routes
    .get("/consigne", consigneController.all)
routes
    .get("/train", trainController.all)

//Client
routes
    .get("/client", clientController.all)
    .post("/client", clientController.create)

//Chargeur
routes
    .get("/chargeur", chargeurController.all)
    .post("/chargeur", chargeurController.create)

//Destination
routes
    .get("/destination", destinationController.all)
    .post("/destination", destinationController.create)

//profil
routes
    .get("/profil", profilController.all)
    .post("/profil", profilController.create)

//User
routes
    .get("/user", userController.all)
    .post("/user", userController.create)
    .post("/user/auth", userController.authenticate)

//wagon
routes
    .get("/wagon", wagonController.all)
    .get("/wagon/:noTag", wagonController.One)
    .post("/wagon", wagonController.create)

//Pesee
routes
    .get("/pesee", peseeController.all)
    .get("/pesee/:train", peseeController.One)
    .post("/pesee", peseeController.create)

module.exports = { routes }