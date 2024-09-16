type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<
  T, K extends keyof T>(items: T[], key: K): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = item[key];

    if (itemKey !== null && itemKey !== undefined) {
      const stringKey = String(itemKey);

      if (grouped[stringKey]) {
        grouped[stringKey].push(item);
      } else {
        grouped[stringKey] = [item];
      }
    }
  });

  return grouped;
}
