type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items :T[], key: keyof T): GroupsMap<T> {
  const newObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key];
    const currentValue = `${value}`;

    if (!newObj[currentValue]) {
      newObj[currentValue] = [];
    }
    newObj[currentValue].push(item);
  });

  return newObj;
}
