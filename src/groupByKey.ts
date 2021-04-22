'use strict';

// describe interfaces
interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey(array: Item[], key: keyof Item) {
  // write code here;
  const result: ItemsGroup<Item> = array.reduce((obj, el) => {
    if (!obj[el[key]]) {
      obj[el[key]] = [];
    }
    obj[el[key]].push(el);

    return obj;
  }, {});

  return result;
}
