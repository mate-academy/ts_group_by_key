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
    const rasultKey = item[key];

    if (!groupObject[rasultKey]) {
      groupObject[rasultKey] = [];
    }

    groupObject[rasultKey].push(item);
  }

  return groupObject;
}
