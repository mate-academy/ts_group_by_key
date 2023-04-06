type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey: string = String(item[key]);

    if (itemKey in groupedItems) {
      groupedItems[itemKey].push(item);
    } else {
      groupedItems[itemKey] = [item];
    }
  });

  return groupedItems;
}
