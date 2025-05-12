type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObjects: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!groupedObjects[itemKey]) {
      groupedObjects[itemKey] = [];
    }

    groupedObjects[itemKey].push(item);
  });

  return groupedObjects;
}
