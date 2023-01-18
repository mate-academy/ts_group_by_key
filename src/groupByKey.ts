type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemValue = String(item[key]);

    if (!group[itemValue]) {
      group[itemValue] = [];
    }

    group[itemValue].push(item);
  });

  return group;
}
