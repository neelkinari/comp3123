const express = require('express');
const app = express();
const port = 3000;

// GET /hello route
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// GET /user with query parameters
app.get('/user', (req, res) => {
  const { firstname = 'Neel', lastname = 'Kinariwala' } = req.query;
  res.json({ firstname, lastname });
});

// POST /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
