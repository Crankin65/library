let myLibrary = [];

function Book(title, author) { 
  this.title = title
  this.author = author
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const book1 = new Book('Haunted', 'Chuck');
const book2 = new Book('Survivor', 'Again Chuck');

addBookToLibrary(book1);
addBookToLibrary(book2);
