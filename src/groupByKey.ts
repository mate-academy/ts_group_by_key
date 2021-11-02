type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped = {};

  items.forEach((item) => {
    const itemKey = `${item[key]}`;

    if (itemKey in grouped) {
      grouped[itemKey].push(item);

      return;
    }

    grouped[itemKey] = [item];
  });

  return grouped;
}
