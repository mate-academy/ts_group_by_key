'use strict';

// describe interfaces
interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey<T, K extends keyof T>(
  array: T[],
  key: K
): ItemsGroup<T> {
  const result = <Item>{};

  array.forEach((item) => {
    const modifiedKey = `${item[key]}`;

    if (result[modifiedKey]) {
      result[modifiedKey].push(item);
    } else {
      result[modifiedKey] = [item];
    }
  });

  return result;
}
