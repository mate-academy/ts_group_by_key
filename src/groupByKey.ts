'use strict';

export function groupByKey<T>(array: T[], key: string) {
  interface Group {
    [key: string]: T[];
  };

  const group: Group = {};

  array.forEach((item: T) => {
    group[item[key]] = array.filter(
      (el: T) => el[key] === item[key]
    );
  });

  return group;
}
