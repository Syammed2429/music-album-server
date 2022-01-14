const express = require('express');
const cors = require('cors')

const albumController = require('./controller/albumController')
const songsController = require('./controller/songsController')

const port = 2924;

const app = express();

app.use(cors());
app.use(express.json())

app.use('/albums', albumController)
app.use('/songs', songsController)

module.exports = {
    port,
    app
}