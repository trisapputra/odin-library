let myLibrary = [
    {title: 'title1', author: 'author1111111',pages: 123, status: 'read'},
    {title: 'title2', author: 'author2',pages: 123, status: 'not read'}
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