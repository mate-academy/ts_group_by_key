type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keySort = String(item[key]);

    if (!grouped[keySort]) {
      grouped[keySort] = [];
    }

    grouped[keySort].push(item);
  });

  return grouped;
}
