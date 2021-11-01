type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items :T[], key: keyof T): GroupsMap<T> {
  const newObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key];

    if (!newObj[`${value}`]) {
      newObj[`${value}`] = [];
    }
    newObj[`${value}`].push(item);
  });

  return newObj;
}
