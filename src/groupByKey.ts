type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item: T) => {
    grouped[String(item[key])] = [];
  });

  items.forEach((item: T) => {
    grouped[String(item[key])].push(item);
  });

  return grouped;
}
