type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groupedObjects: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!groupedObjects[`${item[key]}`]) {
      groupedObjects[`${item[key]}`] = [];
    }

    groupedObjects[`${item[key]}`].push(item);
  });

  return groupedObjects;
}
