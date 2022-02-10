type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T)
  : GroupsMap<T> {
  const sortedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!(value in sortedObject)) {
      sortedObject[value] = [];
    }

    sortedObject[value].push(item);
  });

  return sortedObject;
}
