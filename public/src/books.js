function findAuthorById(authors, id) {
return findCertainElement(authors, id);
  }

function findBookById(books, id) {
 return findCertainElement(books, id);
}

function partitionBooksByBorrowedStatus(books) {
let checkedOut = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
   let finalArray = [[...booksBorrowed], [...checkedOut]];
 return finalArray;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(account => account.id === borrow.id)
  return {...borrow, ...account}}).slice(0, 10);
}

//helper Function
function findCertainElement(elements, id) {
  return elements.find((element) => element.id === id);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
