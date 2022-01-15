const express = require('express');


const Album = require('../models/albumModel');
const router = express.Router()

//CRUD

//Create
router.post('', async (req, res) => {
    const album = await Album.create(req.body);

    return res.status(201).send(album)
});


// search the songs
router.get('/search', async (req, res) => {
    console.log(req.query.q);
    const songs = await Album.find({ name: req.query.q })

    return res.status(200).send(songs)

})


//Get the album for particular artist name
router.get('/artist', async (req, res) => {
    try {
        const albums = await Album.find({ artist_name: req.query.name })
        if (albums.length === 0) return res.status(404).send("You don't have any albums yet")
        return res.status(200).send(albums)
    } catch (e) {
        console.log('e:', e)

    }
})

//GET  all albums
router.get('', async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +req.query.limit || 5;
        const offSet = (page - 1) * size;

        const albums = await Album.find().populate({
            path: "songs",
            select: ["name", "duration"],
        }).limit(size).skip(offSet).lean().exec();
        const totalAlbums = await Album.find().countDocuments();
        const totalPages = Math.ceil(totalAlbums / size);
        return res.status(200).send({ albums, totalPages })

    } catch (e) {
        console.log('e:', e)

    }

})

//get an album by id
router.get('/:id', async (req, res) => {
    const album = await Album.findById(req.params.id).populate({
        path: 'songs',
        select: ["name", "duration"],

    });

    return res.status(200).send(album)
})







module.exports = router