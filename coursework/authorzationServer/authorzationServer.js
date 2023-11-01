const express = require('express');
const app = express();
const port = 3000;

app.get('/authorzation', (req, res) => {
  res.send('You get the permission!');
});

app.listen(port, () => {
  console.log(`Authorzation Service Stub is running at http://localhost:${port}/authorzation`);
});