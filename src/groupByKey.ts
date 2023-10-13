type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyForObj = item[key] as string;

    if (!newObject[keyForObj]) {
      newObject[keyForObj] = [];
    }

    newObject[keyForObj].push(item);
  });

  return newObject;
}
