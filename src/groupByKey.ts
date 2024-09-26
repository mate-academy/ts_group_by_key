type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemKey = String(item[key]);

    if (!groupedItems[itemKey]) {
      groupedItems[itemKey] = [item];
    } else {
      groupedItems[itemKey].push(item);
    }
  });

  return groupedItems;
}
