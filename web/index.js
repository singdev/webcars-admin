const { verifyToken, login } = require('../lib/src/adapter/controller/authController');

const zone = require('./zone');
const ZoneRepository = require('../lib/src/adapter/storage/MongoZoneRepository');
const GetAllZone = require('../lib/src/application/use_case/GetAllZone');
const zoneRepository = new ZoneRepository();

module.exports = (app) => {

    app.set("View engine", 'pug');
    app.set("Views", __dirname + "/views");

    app.use("/zone", zone);

    app.get("/", verifyToken, (req, res, next) => {
        if(req.auth){
            res.redirect("/user-page");
        } else {
            res.redirect("/login-page");
        }
    })

    app.post("/login", (req, res, next) => {
        login(req, res, next);
    });

    app.get("/login-page", verifyToken, (req, res, next) => {
        if(req.auth){
            res.redirect("/user-page");
        } else {
            res.render("login.pug");
        }
    });

    app.get("/urban-page", verifyToken, async (req, res, next) => {
        if(req.auth){
            const zones = await GetAllZone(zoneRepository);
            console.log(zones);
            res.render("urban.pug", { zones });
        } else {
            res.redirect("/login-page");
        }
    });

    app.get("/user-page", verifyToken, (req, res, next) => {
        if(req.auth){
            res.render("user.pug");
        } else {
            res.redirect("/login-page");
        }
    });

    app.get("/scan-qrcode-page", verifyToken, (req, res, next) => {
        if(req.auth){
            res.render("scan_qrcode.pug");
        } else {
            res.redirect("/login-page");
        }
    })


}