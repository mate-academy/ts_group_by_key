type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groupedObjects: GroupsMap<T> = {};

  items.forEach((item) => {
    const objectKey = String(item[key]);

    if (!groupedObjects[objectKey]) {
      groupedObjects[objectKey] = [];
    }

    groupedObjects[objectKey].push(item);
  });

  return groupedObjects;
}
