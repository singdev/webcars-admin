const router = require('express').Router();

const { verifyHeaderToken } = require('../lib/src/adapter/controller/authController');

const ZoneRepository = require('../lib/src/adapter/storage/MongoZoneRepository');
const Update = require('../lib/src/application/use_case/UpdateZone');
const GetAllZone = require('../lib/src/application/use_case/GetAllZone');
const zoneRepository = new ZoneRepository();

router.post("/update", verifyHeaderToken, async (req, res, next) => {
    if(req.auth) {
        const result = await Update(req.body._id, req.body, zoneRepository);
        if(result){
            res.send(result);
        } else {
            res.sendStatus(500);
        }
    } else {
        res.sendStatut(401);
    }
});

router.get("/", verifyHeaderToken, async (req, res, next) => {
    if(req.auth){
        const zones = await GetAllZone(zoneRepository);
        if(zones){
            res.send(zones);
        } else {
            res.sendStatus(500);
        }
    } else {
        res.sendStatus(401);
    }
})

module.exports = router;