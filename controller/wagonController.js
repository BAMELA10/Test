const Wagon = require('../model/wagon')
const express = require('express')


const create = async(req, res) => {
    const data = req.body;
    if (!data) throw new Error("Invalid data");
    const saved = await Wagon.create({ tare: data.designation })
    return res.json({ data: saved })
}

const all = async(req, res) => {
    const data = await Wagon.findAll()
    return res.json({ data })
}

const One = async(req, res) => {
    const noTag = req.params.noTag
    if (!noTag) throw new Error("Invalid data");
    const data = await Wagon.findOne({
        where: {
            noTag: noTag
        }
    })

    if (!data) throw new Error("Element Not Found")
    return res.json({ data })
}

module.exports = { create, all, One }