const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://username:password@ds153730.mlab.com:53730/votingapp');
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

var db = mongoose.connection;
console.log('just testing the console');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected, yo!');
});

var testSchema = new mongoose.Schema({
  name: String,
  number: Number
});

var Test = mongoose.model('test',testSchema);

var something = new Test({
  name: 'bongos'
});

something.save()

Test.findOne({},function(error,data){
  console.log(data);
})

const app = express();
app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}






app.post('/api', (req, res) => {
  //mongoose.findOne({test:1},function(error,result){
    //console.log('post request happened')
    //res.send(result)
  //})
  
  //const param = req.query.q;
  console.log('made a request')
  console.log('at least its working');
  res.send('hey man, got your post request')
  
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});