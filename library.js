let myLibrary = [];

function Book(title, author, numberOfPages, readStatus) { 
  this.title = title
  this.author = author
  this.numberOfPages = numberOfPages
  this.readStatus = readStatus
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const book1 = new Book('Haunted', 'Chuck', 200, 'Read');
const book2 = new Book('Survivor', 'Again Chuck', 150, 'Not Read');

addBookToLibrary(book1);
addBookToLibrary(book2);

document.addEventListener('submit', function(e){
  e.preventDefault()
  const bookForm = document.querySelector("#books");
  const title = bookForm.elements['bookTitle']
  const author = bookForm.elements['bookAuthor']
  const pages = bookForm.elements['numberOfPages']
  const read = bookForm.elements['readStatus']
  let bookTitle = title.value
  let bookAuthor = author.value
  let numberOfPages = pages.value
  let readStatus = read.value
  const bookObj = new Book(bookTitle, bookAuthor, numberOfPages, readStatus)
  addBookToLibrary(bookObj)
  addToTable()
  bookForm.reset()
})


function addToTable() {
  let table = document.getElementById("libraryTable");
  let row = table.insertRow();
  let numberRow = row.insertCell();
  let titleCell = row.insertCell();
  let authorCell = row.insertCell();
  let pageCell = row.insertCell();
  let readCell = row.insertCell();
  numberRow.innerHTML = myLibrary.length;
  titleCell.innerHTML = myLibrary[myLibrary.length - 1].title;
  authorCell.innerHTML = myLibrary[myLibrary.length - 1].author;
  pageCell.innerHTML = myLibrary[myLibrary.length - 1].numberOfPages;
  readCell.innerHTML = myLibrary[myLibrary.length -1].readStatus;
}


for (let i =0; i < myLibrary.length; i++) {
  let table = document.getElementById("libraryTable");
  let row = table.insertRow();
  let numberRow = row.insertCell();
  let titleCell = row.insertCell();
  let authorCell = row.insertCell();
  let pageCell = row.insertCell();
  let readCell = row.insertCell();
  numberRow.innerHTML = (i+1);
  titleCell.innerHTML = myLibrary[i].title;
  authorCell.innerHTML = myLibrary[i].author;
  pageCell.innerHTML = myLibrary[i].numberOfPages;
  readCell.innerHTML = myLibrary[i].readStatus;
}

