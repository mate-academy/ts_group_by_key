type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const propertie = String(item[key]);

    if (!grouped[propertie]) {
      grouped[propertie] = [];
    }

    grouped[propertie].push(item);
  });

  return grouped;
}
