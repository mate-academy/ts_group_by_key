type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item: T): void => {
    if (!group[item[key]]) {
      group[item[key]] = [];
    }

    group[item[key]].push(item);
  });

  return group;
}
