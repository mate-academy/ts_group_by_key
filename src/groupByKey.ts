type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const value: string = String(item[key]);

    if (value in groups) {
      groups[value].push(item);
    } else {
      groups[value] = [item];
    }
  });

  return groups;
}
