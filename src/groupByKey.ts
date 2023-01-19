type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newGroupByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!newGroupByKey[groupKey]) {
      newGroupByKey[groupKey] = [];
    }

    newGroupByKey[groupKey].push(item);
  });

  return newGroupByKey;
}
