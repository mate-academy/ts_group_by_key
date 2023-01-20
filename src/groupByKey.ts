type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((a) => {
    const aValue = String(a[key]);

    if (!group[aValue]) {
      group[aValue] = [];
    }

    group[aValue].push(a);
  });

  return group;
}
