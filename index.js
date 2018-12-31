const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()


app.use(express.static(path.join(__dirname,'../rsom-client/dist')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../rsom-client/dist', 'index.html'));
});


app.listen(process.env.PORT || 8080), function() {
  console.log("Node app is running")
};