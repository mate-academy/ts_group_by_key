type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T): GroupsMap<T> {
  const groupItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!groupItems[groupKey]) {
      groupItems[groupKey] = [];
    }

    if (groupItems[groupKey]) {
      groupItems[groupKey].push(item);
    }
  });

  return groupItems;
}
