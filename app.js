require('dotenv').config();
const mongoose = require("mongoose");
const express = require('express');
const routes = require('./routes');
const bodyParser = require("body-parser");

const app = express();

const { PORT } = process.env;
const uri = "mongodb+srv://ujh9208:grz5eeJ4uGrUSvMd@whendo.6dmgwet.mongodb.net/?retryWrites=true&w=majority&appName=WhenDo";

const clientOptions = { dbName: 'WhenDo', serverApi: { version: '1', strict: true, deprecationErrors: true } };
mongoose
  .connect(uri, clientOptions)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use(express.urlencoded( {extended : false } ));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
