const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
},
    {
        versionKey: false,
        timestamps: true,
    }
);

const Song = mongoose.model('song', songSchema);

module.exports = Song;