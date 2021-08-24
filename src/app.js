require('dotenv').config()

const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../models/index');
const createCategories = require('../src/utils/helper');
const app = express();

let catCheck = true;


app.use(cors());

// Parsers to parse the Applications
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// folder to upload files
app.use(express.static(__dirname + '/public')); 

// All the routes are defiend in Routes directory
app.use('/api', router);

if (catCheck === true) {
const checkCategories = new Promise((resolve, reject) => {
  const categories = createCategories();
  resolve(categories)
});

checkCategories.then((data)=> {
  if (data === false) {
    catCheck = false;
  }
  })
}


module.exports = app;