const express = require('express');


const Song = require('../models/songsModel');

const router = express.Router()

//CRUD

//POST
router.post('', async (req, res) => {
    const songs = await Song.findOne(req.body).lean().exec();
    if (songs) return res.json({ msg: 'Song is already exists' })

    const song = await Song.create(req.body)


    return res.status(201).send(song);
})

module.exports = router;