type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newObj: GroupsMap<T> = {};

  for (const item of items) {
    const itemKey = String(item[key]);

    if (!newObj[itemKey]) {
      newObj[itemKey] = [];
    }
    newObj[itemKey].push(item);
  }

  return newObj;
}
