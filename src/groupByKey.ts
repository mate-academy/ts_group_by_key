type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObjects: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!Object.prototype.hasOwnProperty.call(groupedObjects, value)) {
      groupedObjects[value] = [];
    }

    groupedObjects[value].push(item);
  });

  return groupedObjects;
}
