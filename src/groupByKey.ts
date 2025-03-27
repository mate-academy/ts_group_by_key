type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!group[value]) {
      group[value] = [];
    }

    group[value].push(item);
  });

  return group;
}
