const express = require('express');
const router = express.Router();
const server = require('./server');

router.delete('/', (request, response) =>{
	const index = parseInt(request.query.index);
	if(index < server.users.length && index >= 0){
		server.users.splice(index,1);
		response.send("Elemento en posición " + index + " eliminado");
	} else {
		response.send("Elemento en posición " + index + " no existe.");
	}
});

module.exports = router;