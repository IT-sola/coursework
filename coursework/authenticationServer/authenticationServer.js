const express = require('express');
const app = express();
const port = 3000;

app.get('/authentication', (req, res) => {
  res.send('You get the access token!');
});

app.listen(port, () => {
  console.log(`Authentication Service Stub is running at http://localhost:${port}/Authentication`);
});