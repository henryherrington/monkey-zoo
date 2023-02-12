const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
 return res.send('Monkey see, monkey do!');
});

app.post('/login', function (req, res) {
    return res.send(true);
});

// POST method route
app.post('/create-account', (req, res) => {
    res.send('miles ingmar tuncel')
})
   
console.log('Now listening on port ' + port + '...');
app.listen(process.env.PORT || port);
