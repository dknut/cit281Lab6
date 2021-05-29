class Book {
  constructor(title, author, pubDate, isbn) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.isbn = isbn;
  }
}

class Library {
  constructor(name) {
    this._name = name;
    this._books = [];
  }
  get books() {
    // Return copy of books
    return JSON.parse(JSON.stringify(this._books));
  }
  get count() {
    return this._books.length;
  }
  addBook(book = {}) {
    const { title = "", author = "", pubDate = "", isbn = "" } = book;
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate, isbn };
      this._books.push(newBook);
    }
  }
  deleteBook(isbn) {
    for (let i = 0; i < this._books.length; i++) {
      if (this._books[i].isbn === isbn) {
        this._books.splice(i, 1);
      }
    }
  }
  listBooks() {
    for (const book of this._books) {
      const { title, author, pubDate, isbn } = book;
      console.log(
        `Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`
      );
    }
  }
}

//Create library object
const library = new Library("New York Best Seller List");

//Create Books
const atomicHabits = new Book(
  "Atomic Habits",
  "James Clear",
  "10/16/2018",
  "2345123432"
);
const historyText = new Book(
  "History Textbook",
  "A lot",
  "10/15/1995",
  "8472983741"
);
const scienceText = new Book(
  "Science Textbook",
  "A lot",
  "9/13/2005",
  "0937482734"
);

//Add books and output
library.addBook(atomicHabits);
library.addBook(historyText);
library.addBook(scienceText);
//Book count
console.log("Book count: ", library.count);
//List books
library.listBooks();

//Delete a book and output books
console.log("* Library after delete *");
library.deleteBook("8472983741");
library.listBooks();
