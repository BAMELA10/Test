const Consigne = require('../model/consigne')
const Destination = require('../model/destination')
const Pesee = require('../model/pesee')
const express = require('express')
const Wagon = require('../model/wagon')
const Train = require('../model/train')
const Client = require('../model/client')
const Chargeur = require('../model/chargeur')

const all = async(req, res) => {
    const data = await Pesee.findAll()
    return res.json({ data })
}

const create = async(req, res) => {
    const {
        train,
        nb_locomotive,
        item
    } = req.body
    if (!item || !nb_locomotive || !train || !Array.isArray(item)) {
        throw new Error(" Invalid entries check if your entries is complete");
    }

    item.map(async(i) => {

        const verifyDes = await Destination.findOne({ where: { code: i.destination } })
        if (!verifyDes) throw new Error("Not found destination")
        const verifyCli = await Client.findOne({ where: { code: i.client } })
        if (!verifyCli) throw new Error("Not found client")
        const verifyChg = await Chargeur.findOne({ where: { code: i.chargeur } })
        if (!verifyChg) throw new Error("Not found destination")
        const verigyWg = await Wagon.findOne({ where: { noTag: i.wagon } })
        if (!verigyWg) throw new Error(`Not found wagon ${i.wagon}`)
        if (!i.proidBrute) throw new Error(`Invalid weigth for wagon ${i.wagon}`)
    })

    const trainSaved = await Train.create({ nom_interne: train, nb_locomotive })

    for (let i of item) {
        const consigneSaved = await Consigne.create({ designation: i.consigne })
        const wagon = await Wagon.findOne({ where: { noTag: i.wagon } })
        const pesee = await Pesee.create({
            noInterneTrain: trainSaved.no_interne,
            DestinationCode: i.destination,
            ClientCode: i.client,
            ChargeurCode: i.chargeur,
            noTagWagon: wagon.noTag,
            poidBrute: i.proidBrute,
            poidNet: i.proidBrute - wagon.tare,
            consigneId: consigneSaved.code,
        })
    }

    const id = trainSaved.no_interne
    console.log(id)
    const trainWeigth = await Pesee.findAll({ where: { noInterneTrain: (id) } })
    console.log(trainWeigth)
    return res.json({ data: trainWeigth })

}

const One = async(req, res) => {
    const train = req.params.train
    const trainWeigth = await Pesee.findAll({
        where: { noInterneTrain: train },
        include: { all: true },
    })
    const totalWeight = await Pesee.sum('poidNet', {
        where: { noInterneTrain: train },
    });
    return res.json({ data: trainWeigth, totalWeight })
}

module.exports = { all, create, One }