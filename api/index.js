const zone = require('./zone');
const user = require('./user');

module.exports = (app) => {
    app.use("/api/user", user);
    app.use("/api/zone", zone);
}