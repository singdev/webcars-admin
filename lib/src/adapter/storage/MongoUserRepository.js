const UserRepository = require('../../application/repository/UserRepository');

const User = require('../../database/model/user');

module.exports = class extends UserRepository {

    async create(user){
        const u = new User(user);
        return await u.save();
    }

    async get(id){
        return await User.findOne({ _id: id});
    }

    async getByEmail(email){
        return await User.findOne({ email: email});
    }
}