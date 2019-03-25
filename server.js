const express = require('express');
const PORT = process.env.PORT || 3000;

var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express();

app.use('/api/friends', apiRoutes);
app.use('*', htmlRoutes);

app.listen(PORT, () => console.log('App listening on port: ' + PORT));