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

// const book1 = new Book('Haunted', 'Chuck', 200, 'Read');
// const book2 = new Book('Survivor', 'Again Chuck', 150, 'Not Read');

// addBookToLibrary(book1);
// addBookToLibrary(book2);

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
  const newBookIndex = myLibrary.map(object => object.title).indexOf(bookTitle)
  addToTable(newBookIndex)
  bookForm.reset()
  console.log(newBookIndex)
})


function addToTable(index) {
  let table = document.getElementById("libraryTable");
  let row = table.insertRow();
  let numberRow = row.insertCell();
  let titleCell = row.insertCell();
  let authorCell = row.insertCell();
  let pageCell = row.insertCell();
  let readCell = row.insertCell();
  let deleteCell = row.insertCell();
  numberRow.innerHTML = index+1;
  titleCell.innerHTML = myLibrary[index].title;
  authorCell.innerHTML = myLibrary[index].author;
  pageCell.innerHTML = myLibrary[index].numberOfPages;
  readCell.innerHTML = myLibrary[index].readStatus;

  let deletebtn = document.createElement('button');
  deletebtn.setAttribute("bookNumber", index + 1);
  deletebtn.innerText = 'Delete';
  deletebtn.onclick = function() {
    delete myLibrary[deletebtn.getAttribute("bookNumber")];
    document.getElementById("libraryTable").deleteRow(deletebtn.getAttribute("bookNumber"))
    
  }

  deleteCell.appendChild(deletebtn);
}

// for (let i =0; i < myLibrary.length; i++) {
//   let table = document.getElementById("libraryTable");
//   let row = table.insertRow();
//   let numberRow = row.insertCell();
//   let titleCell = row.insertCell();
//   let authorCell = row.insertCell();
//   let pageCell = row.insertCell();
//   let readCell = row.insertCell();
//   let deleteCell = row.insertCell();
//   numberRow.innerHTML = (i+1);
//   titleCell.innerHTML = myLibrary[i].title;
//   authorCell.innerHTML = myLibrary[i].author;
//   pageCell.innerHTML = myLibrary[i].numberOfPages;
//   readCell.innerHTML = myLibrary[i].readStatus;
  
//   let deletebtn = document.createElement('button');
//   deletebtn.setAttribute("bookNumber", i + 1);
//   deletebtn.innerText = 'Delete';
//   deletebtn.onclick = function() {
//     delete myLibrary[deletebtn.getAttribute("bookNumber")];
//     document.getElementById("libraryTable").deleteRow(deletebtn.getAttribute("bookNumber"))
//   }

//   deleteCell.appendChild(deletebtn);
  
  
// }

// To do
// Update number column to dynamically update in column (Use findIndex based on title during delete button)
// Make delete row function to look at index based on number in row

