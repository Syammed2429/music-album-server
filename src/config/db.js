const mongoose = require('mongoose');
require('dotenv').config()


const connect = () => {
    return mongoose.connect(MONGO_DB)
}

module.exports = connect;