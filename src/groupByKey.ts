type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<
  T extends object>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const value: string = item[key];

    if (!grouped[value]) {
      grouped[value] = [item];
    } else {
      grouped[value].push(item);
    }
  });

  return grouped;
}
