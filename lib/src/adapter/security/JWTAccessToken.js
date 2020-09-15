const AccessToken = require('../../application/security/AccessToken');

const jwt = require('jsonwebtoken');

const secret = "webcars2020";

module.exports = class extends AccessToken {

    async generate(payload){
        return await jwt.sign(payload, secret);
    }

    async decode(token){
        return await jwt.verify(token, secret);
    }
}