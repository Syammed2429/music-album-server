const mongoose = require('mongoose');

const Song = require('../models/songsModel')

const albumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    artist_name: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: Number, required: true },
    songs: { type: mongoose.Schema.Types.ObjectId, ref: Song }
},
    {
        versionKey: false,
        timestamps: true,
    }
);

const Album = mongoose.model('album', albumSchema);

module.exports = Album;