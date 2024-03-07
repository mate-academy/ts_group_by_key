type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);
    const group = grouped[groupKey];

    if (group) {
      group.push(item);
    } else {
      grouped[groupKey] = [item];
    }
  });

  return grouped;
}
