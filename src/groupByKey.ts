// import { type } from "os";

type GroupsMap<T> = {
  [key: string]: T[];
};

interface Books {
  author: string,
  country: string,
  imageLink: string,
  language: string,
  pages: number,
  title: string,
  year: number
}

type Key = 'author' | 'country' | 'imageLink' |
'language' | 'pages' | 'title' | 'year';

export function groupByKey(items: Books[], key: Key): GroupsMap<Books> {
  const result: GroupsMap<Books> = {};

  const mass: any[] = [];

  items.forEach((element: Books) => mass.push(element[key]));

  mass.forEach((element) => {
    result[element] = items.filter((el: Books) => el[key] === element);
  });

  return result;
}
