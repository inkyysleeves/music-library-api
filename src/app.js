const express = require('express');

const app = express();

// const bodyparser = require('body-parser');

const artistControllers = require('./controller/artist');

app.use(express.json());
app.post('/artists', artistControllers.create);
app.get('/artists', artistControllers.list);
app.get('/artists/:artistId', artistControllers.find);
app.patch('/artists/:artistId', artistControllers.update);
app.delete('/artists/:artistId', artistControllers.delete);
module.exports = app;
