'use strict';

// describe interfaces
interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey(array: Item[], key: string) {
  // write code here;
  const obj: ItemsGroup<Item> = {};

  for (const element of array) {
    const valueOfKey = element[key];

    if (obj.hasOwnProperty(valueOfKey)) {
      continue;
    }

    const grouppedArr = array.filter(el => el[key] === valueOfKey);

    obj[valueOfKey] = grouppedArr;
  }

  return obj;
}
