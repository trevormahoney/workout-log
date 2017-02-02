require('dotenv').config()

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
//var Sequelize = require('sequelize')
var sequelize = require('./db.js');
// var User = sequelize.import('./models/user.js')

sequelize.sync()//sync({force:true}), to drop then create each time the app starts!

app.use(bodyParser.json())

app.use(require('./middleware/headers'))
app.use(require('./middleware/validate-session'))
app.use('/api/user', require('./routes/user'))

app.use('/api/login', require('./routes/session'))
app.use('/api/definition', require('./routes/definition'))
app.use('/api/log', require('./routes/log'))

app.use('/api/test', function(req, res){
	res.send("Hello World")
})

app.listen(3000, function(){
	console.log("app is listening on 3000")
})

