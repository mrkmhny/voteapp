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

const app = express();
app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


var characterSchema = new mongoose.Schema({
  characterId: { type: String, unique: true, index: true },
  name: String,
  race: String,
  gender: String,
  bloodline: String,
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  reports: { type: Number, default: 0 },
  random: { type: [Number], index: '2d' },
  voted: { type: Boolean, default: false }
});






app.get('/api', (req, res) => {
  
  res.send('come on baby')
  const param = req.query.q;
  console.log('made a request')
  
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});