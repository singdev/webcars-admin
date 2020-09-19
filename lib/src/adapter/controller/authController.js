const Authentify = require('../../application/use_case/AuthentifyUser');
const GetToken = require('../../application/use_case/GenerateAccessToken');
const JWT = require('../security/JWTAccessToken');
const Bcrypt = require('../security/Bcrypt');
const UserRepository = require('../storage/MongoUserRepository');

const jwt = new JWT();
const userRepository = new UserRepository();
const bcrypt = new Bcrypt();

module.exports = {

    async login(req, res, next) {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;

        const user = await Authentify(email, password, userRepository, bcrypt);

        if (user) {
            const token = await GetToken(user, jwt);
            res.cookie('auth', token);
        }
        res.redirect("/");
    },

    async loginAPI(req, res, next) {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;

        const user = await Authentify(email, password, userRepository, bcrypt);

        if (user) {
            const token = await GetToken(user, jwt);
            res.send(token);
        } else {
            res.send(403);
        }
    },

    async verifyToken(req, res, next) {
        const token = req.cookies.auth;
        console.log(token);
        try {
            if (token) {
                const decoded = await jwt.decode(token);
                req.auth = {
                    credentials: decoded,
                    artifact: { token }
                }
            }
            next();
        } catch (error) {
            console.log(error);
            res.sendStatus(403);
        }
    },

    async verifyHeaderToken(req, res, next) {
        const token = req.headers['authorization'].split(" ")[1];
        try {

            if (token) {
                const decoded = await jwt.decode(token);

                req.auth = {
                    credentials: decoded,
                    artifact: { token }
                }
            }
            next()
        } catch (error) {
            console.log(error);
            res.sendStatus(403);
        }
    }


}