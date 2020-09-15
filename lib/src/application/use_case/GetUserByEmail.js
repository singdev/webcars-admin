module.exports = async (email, userRepository) => {
    try {
        return await userRepository.getByEmail(email);
    } catch(err){
        console.log(err);
        return null;
    }
}