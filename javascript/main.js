let myLibrary = [
    {title: 'The Hobbit', author: 'J.R.R Tolkien',pages: 295, status: 'not read yet'},
    {title: 'The Maze Runner', author: 'James Dashner',pages: 375, status: 'not read yet'}
];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(userBook) {
  myLibrary.push(userBook);
}


function delTableRow () {
  const tableBody = document.getElementById('table-body')
  while (tableBody.hasChildNodes()) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

function tableGenerator () {
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
    const delBtn = document.createElement('button')
    delBtn.setAttribute('class', 'del-btn')
    tableRow.appendChild(delBtn)
    const trashBtn = document.createElement('span')
    trashBtn.setAttribute('class', "material-symbols-outlined")
    trashBtn.textContent = 'delete'
    delBtn.appendChild(trashBtn)
    delBtn.addEventListener('click', () => {
        const bookIndex = myLibrary.findIndex( item => item.title == book.title)
        myLibrary.splice(`${bookIndex}`, 1)
        delTableRow();
        tableGenerator();
    })

    const totalBooks = document.getElementById('total-books')
    totalBooks.textContent = 'Total Books' + ' ' + '=' + ' ' + myLibrary.length
})
}

// generate default tebla from array
tableGenerator();

const addNewBookBtn = document.getElementById('book-btn');
addNewBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = `${document.getElementById('title').value}`
    const author = `${document.getElementById('author').value}`
    const pages = `${document.getElementById('pages').value}`
    const readStats = `${document.querySelector('input[name="read"]:checked').value}`;
    
    let newBook = new Book(title, author, pages, readStats)
    addBookToLibrary(newBook)
    delTableRow();
    tableGenerator();
    
    const form = document.querySelector('form')
    form.reset();
    
    
})


