type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = `${item[key]}`;

    if (!(itemKey in newObject)) {
      newObject[itemKey] = [];
    }

    newObject[itemKey].push(item);
  });

  return newObject;
}
