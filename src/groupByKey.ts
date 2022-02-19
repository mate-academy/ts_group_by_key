type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = `${item[key]}`;

    if (!(itemKey in newObj)) {
      newObj[itemKey] = [];
    }

    newObj[itemKey].push(item);
  });

  return newObj;
}
