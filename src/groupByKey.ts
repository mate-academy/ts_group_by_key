type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T) :GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.map((item: T) => {
    const groupKey = String(item[key]);

    if (!group[groupKey]) {
      group[groupKey] = [];
    }

    group[groupKey].push(item);

    return group;
  });

  return group;
}
