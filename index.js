const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = 'John';
  const date = new Date().toDateString();
  res.render('hello', { name: name, date: date });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});