type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const newObj: GroupsMap<T> = {};

  for (const item of items) {
    const value = item[key];

    if (!newObj.hasOwnProperty(value)) {
      newObj[value] = [item];
    } else {
      newObj[value].push(item);
    }
  }

  return newObj;
}
