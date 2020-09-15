module.exports = async (user, userRepository, crypto) => {
    try {
        if(user.password) {
            user.password = await crypto.hash(user.password);
            return await userRepository.create(user);
        }
    } catch(err){
        console.log(err);
        return err;
    }
}