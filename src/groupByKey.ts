'use strict';

interface T {
  [key: string]: any
}

interface ItemsGroup <T> {
  [key: string]: T[]
}

export function groupByKey(array:T[], key: keyof T):ItemsGroup <T> {
  const result: ItemsGroup <T> = {};

  array.forEach(element => {
    const valueFromKey: string = element[key] as string;

    if (!result.hasOwnProperty(valueFromKey)) {
      result[valueFromKey] = [];
    }
    result[valueFromKey].push(element);
  });

  return result;
}
