const express = require('express');
const app = express();
const port = 8080;


app.get('/persona', (req, res) => {
  res.send('Persona Service Handling Sensitive Data');
});

app.listen(port, () => {
  console.log(`Persona Service listening on port ${port}`);
});