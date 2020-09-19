module.exports = async (id, zoneRepository) => {
    try {
        const result = await zoneRepository.delete(id);
        return result;
    } catch(err){
        console.log(err);
        return null;                                                                                                                                
    }
}