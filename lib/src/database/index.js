const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_URL || 'mongodb://localhost:27017/webcarsadmin';

module.exports = () => {
    mongoose.connect(mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on("error", () => console.log("Mongo Error"));
    mongoose.connection.on("open", () => console.log("Mongo OK"));
}