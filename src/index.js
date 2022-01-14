const express = require('express');
const cors = require('cors')

const musicController = require('./controller/musicController')

const port = 2924;

const app = express();

app.use(cors());
app.use(express.json())

app.use('', musicController)

module.exports = {
    port,
    app
}