const JWT = require('../lib/src/adapter/security/JWTAccessToken');

const jwt = new JWT();

module.exports = {
    async verifyRootToken(req, res, next){
        const header = req.header;
        const token = header["authorization"].split(" ")[1];

        if(token){
            const user = await jwt.decode(token);
            if(user.type == "LIGUE1"){
                next();
            } else {
                res.sendStatus(403);
            }
        } else {
            res.sendStatus(403);
        }
    }
}