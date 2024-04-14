type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key];

    if (!grouped[String(keyValue)]) {
      grouped[String(keyValue)] = [];
    }
    grouped[String(keyValue)].push(item);
  });

  return grouped;
}
