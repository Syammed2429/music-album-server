const mongoose = require('mongoose');
require('dotenv').config()


const connect = () => {
    return mongoose.connect(process.env.MONGO_DB)
}

module.exports = connect;