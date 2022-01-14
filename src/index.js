const express = require('express');
const cors = require('cors')

const albumController = require('./controller/albumController')

const port = 2924;

const app = express();

app.use(cors());
app.use(express.json())

app.use('', albumController)

module.exports = {
    port,
    app
}