type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedObject: GroupsMap<T> = {};

  items.forEach((obj) => {
    const item = obj[key] as string;

    if (!sortedObject[item]) {
      sortedObject[item] = [];
    }

    sortedObject[item].push(obj);
  });

  return sortedObject;
}
