const Consigne = require('../model/consigne')
const express = require('express')

const all = async(req, res) => {
    const data = await Consigne.findAll()
    return res.json({ data })
}

module.exports = { all }