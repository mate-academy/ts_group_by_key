type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = item[key] as string;

    grouped[value] = !grouped[value] ? [item] : [...grouped[value], item];
  });

  return grouped;
}
