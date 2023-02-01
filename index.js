const express = require('express');
var cors = require('cors');

const port = 7000
const host = '0.0.0.0'

const app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
  
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({
        id: 1,
        role: 1,
        username: "Nilton Rocha",
        password: "123@Qwe"
    })
})

app.listen(port, host);