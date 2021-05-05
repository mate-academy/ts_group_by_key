'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey<T>(array: T[], key: string) {
  const grouped: ItemsGroup = array.reduce(
    (groupObj: ItemsGroup, item: Item) => {
      const filteredValue = item[key];

      groupObj.hasOwnProperty(filteredValue)
        ? groupObj[filteredValue].push(item)
        : groupObj[filteredValue] = [item];

      return groupObj;
    }, {});

  return grouped;
}
