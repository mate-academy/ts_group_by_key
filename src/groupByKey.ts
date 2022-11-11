type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const itemsGrouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const curKey = String(item[key]);

    if (itemsGrouped[curKey]) {
      itemsGrouped[curKey].push(item);
    } else {
      itemsGrouped[curKey] = [item];
    }
  });

  return itemsGrouped;
}
