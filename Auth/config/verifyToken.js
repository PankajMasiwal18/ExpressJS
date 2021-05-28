const jwt = require("jsonwebtoken");

exports.verifyJwtToken = (req, res, next) => {

    const token = req.header('auth-token');

    if (!token) {
        return res.status(401).send({ message: 'Access Denied .' });
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.use = verified;
        next();
    }
    catch (err) {
        return res.status(400).send({ message: 'Invalid Token .' });
    }
}