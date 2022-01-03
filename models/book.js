const fs = require('fs');
const path = require('path');

module.exports = class Book {
  constructor(title) {
    this.title = title;
  }

  save() {
    const p = path.join(path.dirname(require.main.filename),
      'data',
      'books.json');

    fs.readFile(p, (err, fileContent) => {
      let books = [];
      if (!err) {
        books = JSON.parse(fileContent);
      }
      books.push(this);
      fs.writeFile(p, JSON.stringify(books), err => {
        console.log(err);
      });
    })
  }

  static fetchAll(cb) {
    const p = path.join(path.dirname(require.main.filename),
      'data',
      'books.json');
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  }
}