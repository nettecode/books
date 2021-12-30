const express = require('express');
const path = require('path');
const expHbs = require('express-handlebars');
const bodyParser = require('body-parser');

const books = [{
  title: 'Harry Potter And The Prisoner Of Azkaban'
}];

const app = express();
app.engine('hbs', expHbs({
  layoutsDir: 'views/layouts/',
  defaultLayout: 'main-layout',
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/add-book', (req, res, next) => {
  books.push({ title: req.body.bookTitle });
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'List of Books',
    books: books,
    hasBooks: books.length > 0
  });
});

app.listen(3000);