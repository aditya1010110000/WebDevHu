// const express = require('express')
// import express from "express";
// const app = express();
// const port = 3400;

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })   

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}.`);
// })



import express from "express";
const app = express();
const port = 3400;

app.get('/', function (req,res) {
  res.send('Hello, world!!')
})

app.listen(port, () => {
  console.log(`The server is running successfully at ${port}.`);
})

