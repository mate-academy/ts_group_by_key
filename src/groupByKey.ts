type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObjects: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemValue = item[key];

    if (!groupedObjects[itemValue]) {
      groupedObjects[itemValue] = [];
    }

    groupedObjects[itemValue].push(item);
  });

  return groupedObjects;
}
