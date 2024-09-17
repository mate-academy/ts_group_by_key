type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupedKey = String(item[key]);

    if (!grouped[groupedKey]) {
      grouped[groupedKey] = [];
    }

    grouped[groupedKey].push(item);
  });

  return grouped;
}
