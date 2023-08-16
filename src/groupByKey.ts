type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T)
  : GroupsMap<T> {
  const grouppedObjects: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key];

    if (grouppedObjects[value as string] === undefined) {
      grouppedObjects[value as string] = [item];
    } else {
      grouppedObjects[value as string].push(item);
    }
  });

  return grouppedObjects;
}
