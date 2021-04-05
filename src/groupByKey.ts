'use strict';

interface Item {
  [key: string]: any
};

interface ItemGroup<T> {
  [key: string]: T[];
};

export function groupByKey(array: Item[], key: keyof Item) {
  const resultObj: ItemGroup<Item> = {};

  for (const book of array) {
    if (!(book[key] in resultObj)) {
      resultObj[book[key]] = [];
    };
    resultObj[book[key]].push(book);
  };

  return resultObj;
};
