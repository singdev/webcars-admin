module.exports = async (password, userRepository, crypto) => {
    try {
        const user = {
            nom: "Le super admin",
            email: "root@webcars.ga",
            password: password,
            type: "LIGUE1"
        }
        if(user.password) {
            user.password = await crypto.hash(user.password);
            const res =  await userRepository.create(user);
            console.log(res);
        }
    } catch(err){
        console.log("Root already exist");
        return err;
    }

}