require('dotenv').config();
const mongoose = require("mongoose");
const express = require('express');
const routes = require('./routes');

const app = express();

const { PORT } = process.env;
const uri = "mongodb+srv://ujh9208:grz5eeJ4uGrUSvMd@whendo.6dmgwet.mongodb.net/?retryWrites=true&w=majority&appName=WhenDo";

const clientOptions = { dbName: 'WhenDo', serverApi: { version: '1', strict: true, deprecationErrors: true } };
mongoose
  .connect(uri, clientOptions)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
