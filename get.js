const express = require('express');
const router = express.Router();
const server = require('./server');

router.get('/', (req, res) =>{
    const index = parseInt(req.query.index);
	if(index < server.users.length && index >= 0){
		const user =server.users[index]
		res.send("lista ["+server.users+"] "+" elemento de la poscicion "+index+" es:"+user);
	} else {
		res.send("Elemento en posición " + index + " no existe. en la lista: "+ server.users);
	}
});

module.exports = router;