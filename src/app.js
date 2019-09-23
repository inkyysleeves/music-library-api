const express = require('express');

const app = express();

// const bodyparser = require('body-parser');

const artistControllers = require('./controller/artist');

app.use(express.json());
app.post('/artists', artistControllers.create);
app.get('/artists', artistControllers.list);
app.get('/artists/:artistId', artistControllers.find);

module.exports = app;
