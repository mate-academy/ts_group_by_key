type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouppedObjects: GroupsMap<T> = {};

  items.forEach((item) => {
    const resultKey = String(item[key]);

    if (grouppedObjects[resultKey]) {
      grouppedObjects[resultKey].push(item);
    } else {
      grouppedObjects[resultKey] = [item];
    }

    return grouppedObjects;
  });

  return grouppedObjects;
}
