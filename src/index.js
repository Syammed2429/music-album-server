const express = require('express');
const cors = require('cors')

const albumController = require('./controller/albumController')
const songsController = require('./controller/songsController')

const port = process.env.PORT || 2924


const app = express();

app.use(cors());
app.use(express.json())

app.use('/albums', albumController)
app.use('/songs', songsController)

app.get('/', (req, res) => {
    return res.status(200).send({ message: 'Hello Welcome to the Music album', getpoints: "Here are getpoint , /albums and /songs" })
})

module.exports = {
    port,
    app
}