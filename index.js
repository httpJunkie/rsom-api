var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 80))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('A React State of Mind!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running locally at:" + app.get('port'))
})
