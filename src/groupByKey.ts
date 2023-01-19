// import { types } from '@babel/core';

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key:keyof T):GroupsMap<T> {
  const groupedItems:GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = item[key] as string;

    if (!groupedItems[groupKey]) {
      groupedItems[groupKey] = [];
    }
    groupedItems[groupKey].push(item);
  });

  return groupedItems;
}
