function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = 0;
  for (let index in books) {
    if (!books[index].borrows[0].returned) {
      result++;
    }
  }
  return result;
}

function getMostCommonGenres(books) {
  // let result = books
  //   .map((elem) => ({
  //     name: elem.genre,
  //     count: books.filter((x) => x.genre === elem.genre).length, //needs calculated here
  //   }))
  //   .sort((a, b) => b.count - a.count);
  let newObj = {};
  for (let index in books) {
    const key = books[index].genre;
    if (!newObj[key]) {
      newObj[key] = 0;
    }
    newObj[key] = newObj[key] + 1;
  }
  let result = [];
  for (let key in newObj) {
    const resultObj = {
      name: key,
      count: newObj[key],
    };
    result.push(resultObj);
  }
  result.sort((accountA, accountB) => accountB.count - accountA.count);
  if (result.length <= 5) {
    return result;
  } else {
    return result.slice(0, 5);
  }
}

function getMostPopularBooks(books) {
  let popularBooks = books
    .map((book) => ({
      name: book.title,
      count: book.borrows.length,
    }))
    .sort((accountA, accountB) => accountB.count - accountA.count);
  if (popularBooks.length <= 5) {
    return popularBooks;
  } else {
    return popularBooks.slice(0, 5);
  }
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = authors
    .map((author) => ({
      name: `${author.name.first} ${author.name.last}`,
      count: books
        .filter((book) => book.authorId === author.id)
        .reduce(
          (accumulator, currentValue) =>
            currentValue.borrows.length + accumulator,
          0
        ),
    }))
    .sort((accountA, accountB) => accountB.count - accountA.count);
  if (popularAuthors.length <= 5) {
    return popularAuthors;
  } else {
    return popularAuthors.slice(0, 5);
  }
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
