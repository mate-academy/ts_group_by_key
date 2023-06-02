type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouppedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!grouppedItems[itemKey]) {
      grouppedItems[itemKey] = [];
    }
    grouppedItems[itemKey].push(item);
  });

  return grouppedItems;
}
