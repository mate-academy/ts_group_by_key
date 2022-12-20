type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const sorted = String(item[key]);

    if (!grouped[sorted]) {
      grouped[sorted] = [];
    }
    grouped[sorted].push(item);
  });

  return grouped;
}
