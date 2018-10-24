const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/sampleApp");
const app = express();

var port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public')); // load UI from public folder
app.use(bodyParser.json());

//const mongoose = require('./server/db/mongoose');

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/register', (req, res) => {
  res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

var Schema = mongoose.Schema;

//create a schema
var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

var User = mongoose.model('User', userSchema);

app.post('/createUser', (req, res) => {
	console.log('req', req.body);
	//res.send(req.body);

	var user = new User({
    	username: req.body.name,
    	password: req.body.password
    });
	user.save(function(err){
      if(err){
      	console.log(err);
        res.send(err);
      }else{
      	console.log('User created Succefully');
        res.send(true);
      }
	});
});

app.listen(port, () => {
	console.log(`Server is up on ${port}`);
});