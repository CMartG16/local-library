function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let currentlyBorrowed = books.filter(book => book.borrows.filter(borrow => borrow.returned === false).length > 0);
  return currentlyBorrowed.length
}

function getMostCommonGenres(books) {
  let common = {};
  books.forEach((book) => (common[book.genre]) ? common[book.genre]++ : common[book.genre]=1);
  return Object.entries(common)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((bookA, bookB) => bookB.count - bookA.count)
  .slice(0, 5);
}

function getMostPopularBooks(books) {
 return books.map((book) => {
   return { name: book.title, count: book.borrows.length };
  }).sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1).slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
