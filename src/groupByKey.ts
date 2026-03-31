type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = item[key] as string;

    if (!(groupKey in groups)) {
      groups[groupKey as string] = [];
    }
    groups[groupKey].push({ ...item });
  });

  return groups;
}
