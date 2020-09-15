module.exports = async (email, password, userRepository, crypto) => {
    try {
        const user = await userRepository.getByEmail(email);
        if(user){
            const result = await crypto.verify(password, user.password);
            if(result){
                return user;
            } else {
                return undefined;
            }
        }
    } catch(err){
        console.log(err);
        return null;
    }
}