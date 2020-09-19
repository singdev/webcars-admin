const router = require('express').Router();

const Create = require('../lib/src/application/use_case/CreateUser');
const GetByEmail = require('../lib/src/application/use_case/GetUserByEmail');
const { loginAPI } = require('../lib/src/adapter/controller/authController');

router.post("/login", async (req, res, next) => {
    await loginAPI(req, res, next);
})

router.post("/", async (req, res, next) => {
});

router.get("/:id", (req, res, next) => {
});

router.get("/email/:email", (req, res, next) => {
});

router.get("/login/:email/:password", (req, res, next) => {
});

module.exports = router;