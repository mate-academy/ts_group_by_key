type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObjects: GroupsMap<T> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const item of items) {
    const groupField = String(item[key]);

    if (!groupedObjects[groupField]) {
      groupedObjects[groupField] = [];
    }

    groupedObjects[groupField].push(item);
  }

  return groupedObjects;
}
