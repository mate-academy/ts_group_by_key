'use strict';

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const groupName = String(item[key]);

    if (!result[groupName]) {
      result[groupName] = [];
    }

    result[groupName].push(item);
  }

  return result;
}
