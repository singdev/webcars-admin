module.exports = async (nom, zoneRepository) => {
    try {
        const result = await zoneRepository.create(nom);
        return result;
    } catch(err){
        console.log(err);
        return null;                                                                                                                                
    }
}