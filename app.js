const express = require('express');
const path = require('path');
const expHbs = require('express-handlebars');

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

app.use('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'List of Books',
    books: books,
    hasBooks: books.length > 0
  });
});

app.listen(3000);