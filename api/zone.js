const router = require('express').Router();

const { verifyHeaderToken } = require('../lib/src/adapter/controller/authController');

const zone = require('./zone');
const ZoneRepository = require('../lib/src/adapter/storage/MongoZoneRepository');
const Update = require('../lib/src/application/use_case/UpdateZone');
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

module.exports = router;