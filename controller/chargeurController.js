const Chargeur = require('../model/chargeur')
const express = require('express')

// creation d'un chargeur
const create = async(req, res) => {
    const data = req.body;
    if (!data) throw new Error("Invalid data");
    const saved = await Chargeur.create({ designation: data.designation })
    return res.json({ data: saved })
}

const all = async(req, res) => {
    const data = await Chargeur.findAll()
    return res.json({ data })
}

module.exports = { create, all }