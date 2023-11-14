function findAccountById(accounts, id) {
  let foundId = accounts.find(accounts => accounts.id === id)
  return foundId
 }
 
 function sortAccountsByLastName(accounts) {
   let sortedArr = accounts.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1)
   return sortedArr
 }
 
 function getTotalNumberOfBorrows(account, books) {
   let borrowed = 0;
   for(let i=0; i<books.length; i++){
     for(let j=0; j<books[i].borrows.length; j++){
       if(account.id === books[i].borrows[j].id){
         borrowed++
       }
     }
   }
   return borrowed
 }
 
 function getBooksPossessedByAccount(account, books, authors) {
   let checkedOut = [];
  let borrowMatch = [];
  books.forEach((item) => {
   const borrowed = item.borrows;
   const book = {
    id: item.id,
    title: item.title,
    genre: item.genre,
    authorId: item.authorId,
    author: {},
    borrows: {}
   };
   const { id, title, genre, authorId, author, borrows } = book;
   borrowed.forEach((borrow) => {
    if (borrow.id === account.id && borrow.returned === false) {
     checkedOut.push(book);
     borrowMatch.push(borrow);
     book.borrows = borrowMatch;
     book.author = authors.filter((auth) => auth.id === book.authorId)[0];
    }
   });
  });
  return checkedOut;
 }
 module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};