type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newObj: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = item[key].toString();

    if (newObj[groupKey]) {
      newObj[groupKey].push(item);
    } else {
      newObj[groupKey] = [item];
    }
  }

  return newObj;
}
