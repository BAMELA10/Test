const Train = require('../model/train')
const express = require('express')

const all = async(req, res) => {
    const data = await Train.findAll()
    return res.json({ data })
}

module.exports = { all }