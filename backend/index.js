const express = require('express');
const cors = require('cors');
const server = express();


//O json eu criei em ./src/data/users.json

//Fiz o uso da biblioteca do node
//Importei o express
//Esse cors eu usei para evitar erros que estava exibindo por causa das portas que o localhost estava pegando
const users = require('./src/data/users.json');

server.use(cors());

//Aqui pego a resposta da chamado para users
server.get('/users', (req, res) => {
     res.json({users})

});

//Aqui eu digo qual a porta que sera usada no express server
server.listen(3000,() => {
    console.log('listening on port')
});