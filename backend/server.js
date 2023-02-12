const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
 return res.send('Hello world');
});

console.log('Now listening on port ' + port + '...');
app.listen(process.env.PORT || port);
