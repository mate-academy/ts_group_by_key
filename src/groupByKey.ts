type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!group[itemKey]) {
      group[itemKey] = [];
    }

    group[itemKey].push(item);
  });

  return group;
}
