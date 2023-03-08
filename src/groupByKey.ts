type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T & string): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupKey: T [keyof T & string] = item[key];

    if (groups[groupKey as string]) {
      groups[groupKey as string].push(item);
    } else {
      groups[groupKey as string] = [item];
    }
  });

  return groups;
}
