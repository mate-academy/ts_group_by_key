type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!Object.prototype.hasOwnProperty.call(grouped, itemKey)) {
      grouped[itemKey] = [];
    }
    grouped[itemKey].push(item);
  });

  return grouped;
}
