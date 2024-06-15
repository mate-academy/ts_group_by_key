type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((obj) => {
    const value = String(obj[key]);

    groups[value] ??= [];
    groups[value].push(obj);
  });

  return groups;
}
