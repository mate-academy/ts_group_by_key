type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = String(item[key]);

    if (groupKey in group) {
      group[groupKey].push(item);
    } else {
      group[groupKey] = [item];
    }
  }

  return group;
}
