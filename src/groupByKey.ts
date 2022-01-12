type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = `${item[key]}`;

    if (group[groupKey] === undefined) {
      group[groupKey] = [];
    }
    group[groupKey].push(item);
  });

  return group;
}
