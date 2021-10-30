interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  pages: number;
  title: string;
  year: number;
}

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: Book[], key: keyof Book): GroupsMap<Book> {
  // write code here;
  return items.reduce((object: GroupsMap<Book>, item: Book) => {
    const groupKey: string | number = item[key];

    if (object[groupKey]) {
      object[groupKey].push(item);
    } else {
      // eslint-disable-next-line no-param-reassign
      object[groupKey] = [item];
      // eslint-enable-next-line no-param-reassign
    }

    return object;
  }, {});
}
