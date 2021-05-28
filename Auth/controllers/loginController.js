const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signUp_model = require('../models/signupModel');

module.exports.login = async (req, res) => {

    try {
        // checking email exists
        const user = await signUp_model.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ message: "Email is not found ." });
        }

        // Password Correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.status(400).json({ message: "Invalid Password ." });
        }

        // create and assign token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.header("auth-token", token).send(token)
    }
    catch (err) {
        res.status(500).send(err);
    }
}

//  const xyz = await bcrypt.compare(plain text , hash);
// it return true or false