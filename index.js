const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // set view engine to ejs
app.set('views', 'views'); // set views directory to views folder

app.get('/', (req, res) => {
  const name = 'John';
  const date = new Date().toDateString();
  res.render('home', { name: name, date: date }); // render home.ejs file
});

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});