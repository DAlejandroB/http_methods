const express = require('express');
const app = express();
const port = 3000;
var users = ['Maria','Jose','Luis','Ana','Carlos'];

exports.users = users;
app.listen(port, () => console.log("Listening at " + port));
app.use('/users', require('./get'),require('./delete'));