const Client = require('../model/client')
const express = require('express')


const create = async(req, res) => {
    const data = req.body;
    if (!data) throw new Error("Invalid data");
    const saved = await Client.create({ designation: data.designation })
    return res.json({ data: saved })
}

const all = async(req, res) => {
    const data = await Client.findAll()
    return res.json({ data })
}

module.exports = { create, all }