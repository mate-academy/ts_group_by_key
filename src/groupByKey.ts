/* eslint-disable no-console */

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const objItems: GroupsMap<T> = {};

  items.forEach((elem) => {
    const keyElemet = elem[key].toString();

    if (!objItems[keyElemet]) {
      objItems[keyElemet] = [];
    }

    objItems[keyElemet].push(elem);
  });

  return objItems;
}
