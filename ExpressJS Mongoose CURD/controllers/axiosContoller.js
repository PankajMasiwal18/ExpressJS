const axios = require('axios')
module.exports.axios_get = async (req, res) => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        res.status(200).send(response.data);  
    }
    catch(err)
    {
        res.status(500).json({"err":err});
    }
}

module.exports.axios_post = async (req, res) => {
    
    try{
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
            title: req.body.title,
            completed: req.body.completed
        });
        res.status(200).send(response.data);  
    }   
    catch(err)
    {
        res.status(500).send(err);
    }
}

module.exports.axios_put = async (req, res) => {
    try{
        console.log(req.param.id);
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/1`,{
            title: req.body.title,
            completed: req.body.completed
        });
        res.status(200).send(response.data);  
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}

module.exports.axios_delete = async (req, res) => {
    try{
        const response = await axios.delete('https://jsonplaceholder.typicode.com/todos/1');
        res.status(200).send(response.data);  
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}

// Performing multiple concurrent requests
module.exports.axios_multiple_get = async (req, res) => {
    try{
        const response = await axios.all([
            axios.get('https://jsonplaceholder.typicode.com/todos'),
            axios.get('https://jsonplaceholder.typicode.com/posts')
        ]);
        res.status(200).send({"res1" : response[0].data , "res2": response[1].data});
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}   
