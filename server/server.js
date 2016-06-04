const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:vote/vote/');

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended:false }));

require('./routes/ballotRoute')(app);
require('./routes/authRoute')(app);

// Server setup

const port = process.env.PORT || 1337;
app.listen(port);

console.log('Server listening on: ', port);

