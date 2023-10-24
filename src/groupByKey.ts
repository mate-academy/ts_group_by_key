type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key] as string;

    if (grouped[value]) {
      grouped[value].push(item);
    } else {
      grouped[value] = [item];
    }
  });

  return grouped;
}
