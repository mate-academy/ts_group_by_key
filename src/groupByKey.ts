type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(objects: T[], key: keyof T):GroupsMap<T> {
  const groupedObjects:GroupsMap<T> = {};

  objects.forEach((object) => {
    const groupName = String(object[key]);

    if (groupedObjects[groupName]) {
      groupedObjects[groupName].push(object);
    } else {
      groupedObjects[groupName] = [object];
    }
  });

  return groupedObjects;
}
