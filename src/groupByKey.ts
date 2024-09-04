type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key];
    const keyString = String(keyValue);

    if (!grouped[keyString]) {
      grouped[keyString] = [];
    }

    grouped[keyString].push(item);
  });

  return grouped;
}
