module.exports = async (user, accessToken) => {
    try {
        return await accessToken.generate({ uid: user._id });
    } catch(err){
        console.log(err);
        return null;
    }
}