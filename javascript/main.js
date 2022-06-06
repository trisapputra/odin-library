let myLibrary = [
    {title: 'The Hobbit', author: 'J.R.R Tolkien',pages: 295, status: 'not read yet'},
    {title: 'The Maze Runner', author: 'James Dashner',pages: 375, status: 'not read yet'}
];

function Book(title, author, pages, note) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.note = note;
}

function addBookToLibrary(userBook) {
  myLibrary.push(userBook);
}

myLibrary.forEach((book) => {
    const tableBody = document.getElementById('table-body')
    const tableRow = document.createElement('tr')
    tableBody.appendChild(tableRow)
    const dataTitle = document.createElement('td')
    dataTitle.textContent = book.title
    tableRow.appendChild(dataTitle)
    const dataAuthor = document.createElement('td')
    dataAuthor.textContent = book.author
    tableRow.appendChild(dataAuthor)
    const dataPages = document.createElement('td')
    dataPages.textContent = book.pages
    tableRow.appendChild(dataPages)
    const dataStat = document.createElement('td')
    dataStat.textContent = book.status
    tableRow.appendChild(dataStat)
})


const addNewBookBtn = document.getElementById('book-btn');
addNewBookBtn.addEventListener('click', function () {
    const title = `${document.getElementById('title').value}`
    const author = `${document.getElementById('author').value}`
    const pages = `${document.getElementById('pages').value}`
    
    let newBook = new Book(title, author, pages, 'read')
    addBookToLibrary(newBook)
    console.log(newBook)
})


