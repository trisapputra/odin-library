let myLibrary = [
    {title: 'The Hobbit', author: 'J.R.R Tolkien',pages: 295, status: 'not read yet'},
    {title: 'The Maze Runner', author: 'James Dashner',pages: 375, status: 'not read yet'}
];

function Book() {
  // the constructor...
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