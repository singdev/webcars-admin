module.exports = async (id, data, zoneRepository) => {
    try {
        const result = await zoneRepository.update(id, data);
        console.log(result);
        return result;
    } catch(err){
        console.log(err);
        return null;                                                                                                                                
    }
}