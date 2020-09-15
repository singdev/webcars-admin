const router = require('express').Router();

const Create = require('../lib/src/application/use_case/CreateUser');
const GetByEmail = require('../lib/src/application/use_case/GetUserByEmail');


router.post("/",  (req, res, next) => {
});

router.get("/:id", (req, res, next) => {
});

router.get("/email/:email", (req, res, next) => {
});

router.get("/login/:email/:password", (req, res, next) => {
});

module.exports = router;