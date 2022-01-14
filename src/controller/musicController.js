const express = require('express');


const Album = require('../models/albumModel');

const router = express.Router();

//CRUD

//GET 
router.get('', async (req, res) => {
    return res.staus(200).send('Hello')
})