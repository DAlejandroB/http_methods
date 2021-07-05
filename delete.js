const express = require('express');
const router = express.Router();
const server = require('./server');

router.delete('/', (request, response) =>{
	const index = parseInt(request.query.index);
	if(index < server.users.length && index >= 0){
		response.send("Elemento "+server.users[index]+" en posición " + index + " fue eliminado");
		server.users.splice(index,1);
	} else {
		response.send("Elemento en posición " + index + " no existe.");
	}
});

module.exports = router;