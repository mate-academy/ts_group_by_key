'use strict';

// describe interfaces
interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey(array: Item[], key: string): ItemsGroup<Item> {
  const result = array.reduce(
    (p: ItemsGroup<Item>, a: Item): ItemsGroup<Item> => {
      if (!p[a[key]]) {
        p[a[key]] = [];
      }

      p[a[key]].push(a);

      return p;
    }, {}
  );

  return result;
}
