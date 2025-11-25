type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObjects: GroupsMap<T> = {};

  for (const item of items) {
    const groupName = String(item[key]);

    if (!groupedObjects[groupName]) {
      groupedObjects[groupName] = [];
    }

    groupedObjects[groupName].push(item);
  }

  return groupedObjects;
}
