const express = require('express');
const cors = require('cors')

const port = 2924;

const app = express();

app.use(cors());
app.use(express.json())


module.exports = {
    port,
    app
}