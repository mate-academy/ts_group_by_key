type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T)
  : GroupsMap<T> {
  const sortedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = String(item[key]);

    if (!(newKey in sortedObject)) {
      sortedObject[newKey] = [];
    }

    sortedObject[newKey].push(item);
  });

  return sortedObject;
}
