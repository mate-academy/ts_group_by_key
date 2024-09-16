type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key];

    if (grouped[String(value)]) {
      grouped[String(value)].push(item);
    } else {
      grouped[String(value)] = [item];
    }
  });

  return grouped;
}
