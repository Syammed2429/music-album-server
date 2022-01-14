const express = require('express');


const Album = require('../models/albumModel');

const router = express.Router()

//CRUD

//Create
router.post('', async (req, res) => {
    const album = await Album.create(req.body);

    return res.status(201).send(album)
});

//GET 
router.get('', async (req, res) => {
    return res.status(200).send('Hello')
})

module.exports = router