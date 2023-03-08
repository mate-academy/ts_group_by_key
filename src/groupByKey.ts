type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupKey: T[keyof T] = item[key];

    if (groupKey in groups) {
      groups[groupKey as string].push(item);
    } else {
      groups[groupKey as string] = [item];
    }
  });

  return groups;
}
