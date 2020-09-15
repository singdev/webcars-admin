const Crypto = require('../../application/security/Crypto');

const bcryptjs = require('bcryptjs');

module.exports = class extends Crypto {

    async hash(data){
        return await bcryptjs.hash(data, 10);
    }

    async verify(data, hashed){
        return await bcryptjs.compare(data, hashed);
    }
}