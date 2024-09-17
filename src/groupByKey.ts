type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item) => {
    group[`${item[key]}`] = items.filter((itemObj) => {
      return itemObj[key] === item[key];
    });
  });

  return group;
}
