const Book = require("../models/book");

exports.addBook = (req, res, next) => {
  const book = new Book(req.body.bookTitle);
  book.save();
  res.redirect('/');
};

exports.getBooks = (req, res, next) => {
  Book.fetchAll(books => {
    res.render('index', {
      pageTitle: 'List of Books',
      books: books,
      hasBooks: books.length > 0
    });
  });
};