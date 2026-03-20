const Profil = require('../model/profil')
const express = require('express')


const create = async(req, res) => {
    const data = req.body;
    if (!data) throw new Error("Invalid data");
    const saved = await Profil.create({ designation: data.designation })
    return res.json({ data: saved })
}

const all = async(req, res) => {
    const data = await Profil.findAll()
    return res.json({ data })
}

module.exports = { create, all }