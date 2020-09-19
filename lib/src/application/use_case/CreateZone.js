module.exports = async (zone, zoneRepository) => {
    try {
        const result = await zoneRepository.create(zone);
        return result;
    } catch(err){
        console.log(err);
        return null;                                                                                                                                
    }
}