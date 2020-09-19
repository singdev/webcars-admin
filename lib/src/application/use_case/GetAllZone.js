module.exports = async (zoneRepository) => {
    try {
        const result = await zoneRepository.getAll();
        return result;
    } catch(err){
        console.log(err);
        return null;                                                                                                                                
    }
}