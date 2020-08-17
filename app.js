const express = require('express');
const cors = require('cors');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);  

app.locals.title = 'timberline';
app.use(cors());
app.use(express.json());

//Endpoints will go here

module.exports = app;
