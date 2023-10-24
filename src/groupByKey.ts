type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key] as string;

    grouped[value] = grouped[value] ? [...grouped[value], item] : [item];
  });

  return grouped;
}
