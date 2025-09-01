type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const newObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = String(item[key]);

    if (!newObject.hasOwnProperty(newKey)) {
      newObject[newKey] = [];
    }

    newObject[newKey]?.push(item);
  });

  return newObject;
}
