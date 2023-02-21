function findAccountById(accounts, id) {
  return accounts.find((account) => id === account.id);
}

function getUpperCaseLastName(account) {
  return account.name.last.toUpperCase();
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    const nameA = getUpperCaseLastName(accountA);
    const nameB = getUpperCaseLastName(accountB);
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce(
    (accumulator, currentValue) =>
      accumulator +
      currentValue.borrows.filter((borrow) => borrow.id === account.id).length,
    0
  );
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = books
    .filter(
      (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
    )
    .map((book) => ({
      ...book,
      author: authors.find((author) => author.id === book.authorId),
    }));
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
