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

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
};

export function groupByKey(
  items: {}[],
  key: string,
): GroupsMap<Student | Book> {
  return items.reduce((acc, element) => {
    if (element[key] in acc) {
      acc[element[key]].push(element);
    } else {
      acc[element[key]] = [element];
    }

    return acc;
  }, {});
}
