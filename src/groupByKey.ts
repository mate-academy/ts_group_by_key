type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!group[`${(item[key])}`]) {
      group[`${(item[key])}`] = [];
    }

    group[`${(item[key])}`].push(item);
  });

  return group;
}
