type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemValue: string = String(item[key]);

    if (!Object.prototype.hasOwnProperty.call(grouped, itemValue)) {
      grouped[itemValue] = [];
    }

    grouped[itemValue].push(item);
  });

  return grouped;
}
