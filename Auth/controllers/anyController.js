

module.exports.any_get = async (req, res) => {

    try {
        return res.status(200).json({ name: "Pankaj Masiwal" });
    }
    catch (err) {
        return res.status(500).send(err);
    }
}
