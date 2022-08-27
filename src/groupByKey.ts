// import { forEachChild } from "typescript";

type GroupsMap<T> = {
  [key: string]: T[];
};

type Item = {
  [key: string]: string | number | boolean | number[];
};

type T = Item;

export function groupByKey(items: T[], key: string): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupKey = `${item[key]}`;

    if (Object.prototype.hasOwnProperty.call(group, groupKey)) {
      group[groupKey].push(item);
    } else {
      group[groupKey] = [];
      group[groupKey].push(item);
    }
  });

  return group;
}
