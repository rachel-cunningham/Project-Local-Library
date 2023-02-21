function findAuthorById(authors, id) {
  return authors.find((author) => id === author.id);
}

function findBookById(books, id) {
  return books.find((book) => id === book.id);
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  const returnedBooks = books.filter((book) => book.borrows[0].returned);
  const borowedBooks = books.filter((book) => !book.borrows[0].returned);
  result.push(borowedBooks);
  result.push(returnedBooks);
  return result;
}

function getBorrowersForBook(book, accounts) {
  const linkBorrowers = book.borrows.map((borrow) => {
    let acc = accounts.find((account) => account.id === borrow.id);
    acc["returned"] = borrow.returned;
    return acc;
  });
  if (linkBorrowers.length <= 10) {
    return linkBorrowers;
  } else {
    return linkBorrowers.slice(0, 10);
  }
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
