type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[], key: keyof T,
): GroupsMap<T> {
  const groupedObjects: GroupsMap<T> = {};

  items.forEach((item) => {
    const objectProperty = String(item[key]);

    if (!(objectProperty in groupedObjects)) {
      groupedObjects[objectProperty] = [];
    }

    groupedObjects[objectProperty].push(item);
  });

  return groupedObjects;
}
