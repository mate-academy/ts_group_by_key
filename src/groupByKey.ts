type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObjects: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupValue = String(item[key]);

    if (!(groupValue in groupedObjects)) {
      groupedObjects[groupValue] = [];
    }

    groupedObjects[groupValue].push(item);
  });

  return groupedObjects;
}
