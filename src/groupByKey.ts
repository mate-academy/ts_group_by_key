/* eslint-disable no-restricted-syntax */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupObject: GroupsMap<T> = {};

  for (const item of items) {
    const resultKey = item[key];

    if (!groupObject[resultKey]) {
      groupObject[resultKey] = [];
    }

    groupObject[resultKey].push(item);
  }

  return groupObject;
}
