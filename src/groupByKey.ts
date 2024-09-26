type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemValue = String(item[key]);

    newObj[itemValue] = items.filter((obj) => obj[key] === item[key]);
  });

  return newObj;
}
