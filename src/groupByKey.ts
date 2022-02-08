type GroupsMap<T> = {
  [key: string]: T[];
};

interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

interface Book {
  author: string,
  country: string,
  imageLink: string,
  language: string,
  title: string,
  pages: number,
  year: number,
}

type Item = Student | Book;

export function groupByKey(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const result: GroupsMap<Item> = {};

  items.forEach((item) => {
    const k = item[key];

    if (!result[k]) {
      result[k] = [];
    }

    result[k].push(item);
  });

  return result;
}
