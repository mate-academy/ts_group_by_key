'use strict';

// describe interfaces
interface Item {
  [key: string]: any
};

interface ItemsGroup<T> {
  [key: string]: T[]
};

export function groupByKey(array: Item[], key: keyof Item) {
  // write code here;

  const objGroped = {} as ItemsGroup<Item>;

  array.forEach(obj => {
    if (!objGroped.hasOwnProperty(obj[key])) {
      objGroped[obj[key]] = [];
    }
    objGroped[obj[key]].push(obj);
  });

  return objGroped;
}
