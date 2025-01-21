'use strict';

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends GroupsMap<T>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const groupKeys = String(item[key]);

    if (!acc[groupKeys]) {
      acc[groupKeys] = [];
    }

    acc[groupKeys].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
