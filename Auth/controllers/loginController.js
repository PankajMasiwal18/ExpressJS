const signUp_model = require('../models/signupModel');

module.exports.all_User_Detail = async (req, res) => {
    try{
        const result = await signUp_model.find();
        res.status(200).send(result);   
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}

//  const xyz = await bcrypt.compare(plain text , hash);
// it return true or false