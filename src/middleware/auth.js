const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        console.log(token);
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please Authenticate'})
    }
}

module.exports = auth;