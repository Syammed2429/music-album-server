const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    artist_name: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: Number, required: true },
    songs: { type: mongoose.Schema.Types.ObjectId, ref: song }
},
    {
        versionKey: false,
        timestamps: true,
    }
);

const Album = mongoose.model('album', albumSchema);

module.exports = Album;