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
  const resultObj = {} as ItemsGroup<Item>;

  for (const obj of array) {
    if (!(obj[key] in resultObj)) {
      resultObj[obj[key]] = [];
    }

    resultObj[obj[key]].push(obj);
  }

  return resultObj;
}
