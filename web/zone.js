const { verifyToken } = require('../lib/src/adapter/controller/authController');
const ZoneRepository = require('../lib/src/adapter/storage/MongoZoneRepository');

const Create = require('../lib/src/application/use_case/CreateZone');
const Delete = require('../lib/src/application/use_case/DeleteZone');
const Update = require('../lib/src/application/use_case/UpdateZone');


const zoneRepository = new ZoneRepository();

const router = require('express').Router();

router.post("/", verifyToken, async (req, res, next) => {
    if(req.auth){
        await Create(req.body, zoneRepository);
        res.redirect("/urban-page");
    }
});

router.post("/delete", verifyToken, async (req, res, next) => {
    if(req.auth){
        await Delete(req.body.id, zoneRepository);
        res.redirect("/urban-page");
    }
});

router.post("/update", verifyToken, async (req, res, next) => {
    if(req.auth){
        await Update(req.body.id, req.body, zoneRepository);
        res.redirect("/urban-page");
    }
});

module.exports = router;