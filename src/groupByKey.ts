type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newGroupObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!newGroupObject[groupKey]) {
      newGroupObject[groupKey] = [];
    }

    newGroupObject[groupKey].push(item);
  });

  return newGroupObject;
}
