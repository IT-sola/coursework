const express = require('express');
const app = express();
const port = 8080;


app.get('/maxlive_net', (req, res) => {
  res.send('Maxlive Service Handling Sensitive Data');
});

app.listen(port, () => {
  console.log(`Maxlive Service listening on port ${port}`);
});