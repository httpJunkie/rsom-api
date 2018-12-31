var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 80))
app.use(express.static(__dirname + '../rsom-client/dist'))

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../rsom-client/dist/index.html'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running locally at:" + app.get('port'))
})
