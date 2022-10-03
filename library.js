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

function bookSubmit(event) {
  let newBook = new Book(bookTitle, bookAuhtor);
  addBookToLibrary(newBook);
  log.textContent = 'form submitted';
}

const bookForm = document.getElementById('books');
const title = bookForm.elements['bookTitle'];
const author = bookForm.elements['bookAuthor'];

let bookTitle = title.value;
let bookAuthor = author.value;

document.addEventListener('submit', function(e){
  e.preventDefault()
  const bookForm = document.getElementById('books');
  const title = bookForm.elements['bookTitle']
  const author = bookForm.elements['bookAuthor']
  let bookTitle = title.value
  let bookAuthor = author.value
  const bookObj = new Book(title, author)
  addBookToLibrary(bookObj)

})

