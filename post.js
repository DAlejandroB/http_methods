const express = require('express');
const router = express.Router();
const server = require('./server');

router.post('/', (req, res) =>{
    const name = req.query.index;
    server.users.push(name);
    res.send("Elemento agregado a la lista: [" + server.users + "]");
});

module.exports = router;