type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemKey: string = String(item[key]);

    if (!grouped[itemKey]) {
      grouped[itemKey] = [];
    }

    grouped[itemKey].push(item);
  });

  return grouped;
}
