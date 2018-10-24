const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/sampleApp");
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   console.log("h");
// });


module.export = {mongoose};