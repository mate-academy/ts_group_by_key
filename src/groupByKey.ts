type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  // write code here;
  const groupedObjects = {};

  items.forEach((item) => {
    if (!((item[key]) in groupedObjects)) {
      groupedObjects[item[key]] = [];
    }

    groupedObjects[item[key]].push(item);
  });

  return groupedObjects;
}
