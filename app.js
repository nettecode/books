const express = require('express');
const path = require('path');
const expHbs = require('express-handlebars');
const bodyParser = require('body-parser');

const { addBook, getBooks } = require('./controllers/books');

const app = express();
app.engine('hbs', expHbs({
  layoutsDir: 'views/layouts/',
  defaultLayout: 'main-layout',
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/add-book', addBook);

app.use('/', getBooks);

app.listen(3000);