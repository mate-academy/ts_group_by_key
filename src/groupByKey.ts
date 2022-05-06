type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const newObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey: string = String(item[key]);

    if (!(newKey in newObject)) {
      newObject[newKey] = [];
    }

    newObject[newKey].push(item);
  });

  return newObject;
}
