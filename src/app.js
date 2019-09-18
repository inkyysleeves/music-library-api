const express = require('express');
const bodyparser = require('body-parser');

const artistControllers = require('./controller/artist');

const app = express();

app.use(express.json());

// app.get('*', (req, res) => {
//   res.status(200).json({ message: 'Hello World!' });
// });
app.post('/artists', artistControllers.create);
app.get('/artists', artistControllers.list);
module.exports = app;
