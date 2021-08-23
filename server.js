require('dotenv').config()

const express = require('express');
const router = require('./src/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models/index');
const createCategories = require('./src/utils/helper');
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

// This will start the express server on defined port
app.listen(process.env.PORT, () => {
  console.log(`Video app listening at http://localhost:${process.env.PORT}`)
})