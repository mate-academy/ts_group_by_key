type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupKey = String(item[key]);

    groups[groupKey] = [...(groups[groupKey] || []), item];
  });

  return groups;
}
