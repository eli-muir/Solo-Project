const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();



// statically serve everything in the build folder on the route '/build'
// app.use('/build', express.static(path.join(__dirname, '../dist')));

app.post('./veggie', (req,res) => {
  console.log('vegggiiiesssss')
})

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join('../index.html'))
});




app.listen(3000); //listens on port 3000 -> http://localhost:3000/


