type GroupsMap<T> = {
  [key: string]: T[];
};

type Book = {
  author: string,
  country: string,
  imageLink: string,
  language: string,
  pages: number,
  title: string,
  year: number
};

type GroupBy = (items: Book[], key: keyof Book) => GroupsMap<Book>;

export const groupByKey: GroupBy = (items, key) => {
  return items.reduce((acc, book) => {
    const copyOfAcc: GroupsMap<Book> = { ...acc };
    const param = book[key];

    if (!copyOfAcc[param]) {
      copyOfAcc[param] = [];
    }

    copyOfAcc[param].push(book);

    return copyOfAcc;
  }, {});
};
