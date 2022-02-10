/* eslint-disable no-restricted-syntax */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const rasultKey = item[key];

    if (!groupObject[rasultKey]) {
      groupObject[rasultKey] = [];
    }

    groupObject[rasultKey].push(item);
  });

  return groupObject;
}
