const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // set view engine to ejs
app.set('views', 'views'); // set views directory to views folder

app.get('/', (req, res) => {
  const name = 'John';
  const date = new Date().toDateString();
  res.render('home', { name: name, date: date }); // render home.ejs file
});
app.get('/productMenu', (req, res) => {
  res.render('productMenu');
});
app.get('/itemPage', (req, res) => {
  res.render('itemPage');
});

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')));



const port = process.env.PORT || 3000; // Use the PORT environment variable or 3000 as fallback

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});