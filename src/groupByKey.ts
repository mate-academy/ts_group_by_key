type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObjects: GroupsMap<T> = {};

  items.forEach((item) => {
    const value: string = String(item[key]);

    if (!groupedObjects[value]) {
      groupedObjects[value] = [];
    }

    groupedObjects[value].push(item);
  });

  return groupedObjects;
}
