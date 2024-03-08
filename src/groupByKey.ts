// import { forEachChild } from 'typescript';

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const value: T[keyof T] = item[key];

    if (!grouped[String(value)]) {
      grouped[String(value)] = [];
    }

    grouped[String(value)].push(item);
  });

  return grouped;
}
