const ZoneRepository = require('../../application/repository/ZoneRepository');
const Zone = require('../../database/model/zone');

module.exports = class extends ZoneRepository {

    async create(zone){
        const z = new Zone(zone);
        return await z.save();
    }

    async get(id){
        return await Zone.findOne({ _id: id});
    }

    async getByNom(nom){
        return await Zone.findOne({ nom: nom });
    }

    async getAll(){
        return await Zone.find({});
    }

    async delete(id){
        return await Zone.findOneAndDelete({ _id: id});
    }

    async update(id, data){
        return await Zone.findOneAndUpdate({ _id: id}, data, { new: true});
    }
}