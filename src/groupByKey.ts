type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyValue = String(item[key]);

    if (!grouped[keyValue]) {
      grouped[keyValue] = [];
    }

    grouped[keyValue].push(item);
  });

  return grouped;
}
