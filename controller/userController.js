const express = require('express')
const bcrypt = require('bcrypt')
const Profil = require('../model/profil');
const User = require('../model/user')

// creation d'un utilisateur
const create = async(req, res) => {
    const { nom, password, profil } = req.body;
    if (!nom || password || profil) throw new Error("Invalid data");

    const profile = await Profil.findOne({ where: { code: profil } })
    if (!profil) throw new Error("Invalid Profile please check")

    const hashPass = await bcrypt.hash(password, 10)
    const saved = await User.create({ nom, password: hashPass, profil })
    return res.json({ data: saved })
}

const all = async(req, res) => {
    const data = await User.findAll()
    return res.json({ data })
}

const authenticate = async(req, res) => {
    const { nom, password } = req.body
    if (!nom || password) throw new Error("Invalid data");
    const user = await User.findOne({ where: nom })
    if (!user) throw new Error("Not found user")
    const compare = await bcrypt.compare(password, user.password)
    if (!compare) throw new Error("username or password invalid")
    return res.json({ authenticated: compare, user: user })

}

module.exports = { create, all, authenticate }