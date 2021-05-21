
const mongoose = require('mongoose');

async function dbConnection() {
    try {
        await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('db is connected very successfully');
    }

    catch (error) {
        console.log(error, 'db is fail to connected')
        process.exit(1)
    }
}

dbConnection();

const db = mongoose.connection;

module.exports = db;
