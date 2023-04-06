type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey: string = String(item[key]);

    if (groupKey in groups) {
      groups[groupKey].push(item);
    } else {
      groups[groupKey] = [item];
    }
  });

  return groups;
}
