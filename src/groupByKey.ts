type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const value: string = String(item[key]);

    if (newObject[value] === undefined) {
      newObject[value] = [];
    }

    newObject[value].push(item);
  });

  return newObject;
}
