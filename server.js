const app = require("./src/app");
const express = require('express');


// folder to upload files
app.use(express.static(__dirname + '/public')); 

const port = process.env.PORT || 5001
// This will start the express server on defined port
app.listen(port, () => {
  console.log(`Video app listening at http://localhost:${process.env.PORT}`)
})