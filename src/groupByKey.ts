type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = String(item[key]);

    if (!groups[value]) {
      groups[value] = [];
    }

    groups[value].push(item);
  });

  return groups;
}
