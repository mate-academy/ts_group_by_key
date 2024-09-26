type GroupsMap<T> = {
  [key: string]: T[];
};

interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  pages: number;
  title: string;
  year: number;
}

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

type Item = Student | Book;

export function groupByKey(items: Item[], key: keyof Item): GroupsMap<Item> {
  return items.reduce((prev: GroupsMap<Item>, item: Item) => {
    if (!prev[item[key]]) {
      prev[item[key]] = [];
    }

    prev[item[key]].push(item);

    return prev;
  }, {});
}
