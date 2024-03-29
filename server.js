const express = require('express');
const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.static('dist'));
app.use(express.static('./'));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});



app.listen(PORT);
console.log(`[SERVER RUNNING] 127.0.0.1:${PORT}`);
