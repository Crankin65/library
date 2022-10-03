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

document.addEventListener('submit', function(e){
  e.preventDefault()
  const bookForm = document.querySelector("#books");
  const title = bookForm.elements['bookTitle']
  const author = bookForm.elements['bookAuthor']
  let bookTitle = title.value
  let bookAuthor = author.value
  const bookObj = new Book(bookTitle, bookAuthor)
  addBookToLibrary(bookObj)
  bookForm.reset()
  addToTable()
})


function addToTable() {
  let table = document.getElementById("libraryTable");
  let row = table.insertRow();
  let numberRow = row.insertCell();
  let titleCell = row.insertCell();
  let authorCell = row.insertCell();
  numberRow.innerHTML = myLibrary.length;
  titleCell.innerHTML = myLibrary[myLibrary.length - 1].title;
  authorCell.innerHTML = myLibrary[myLibrary.length - 1].author;
}


for (let i =0; i < myLibrary.length; i++) {
  let table = document.getElementById("libraryTable");
  let row = table.insertRow();
  let numberRow = row.insertCell();
  let titleCell = row.insertCell();
  let authorCell = row.insertCell();
  numberRow.innerHTML = (i+1);
  titleCell.innerHTML = myLibrary[i].title;
  authorCell.innerHTML = myLibrary[i].author;
}

