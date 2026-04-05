// import { log } from 'console';
// import books from './books.json';
// import students from './students.json';

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const newObjectKey = String(item[key]);

    if (!result[newObjectKey]) {
      result[newObjectKey] = [];
    }

    result[newObjectKey].push(item);
  });

  return result;
}
