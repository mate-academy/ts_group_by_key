type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemGroup = String(item[key]);

    if (!groupedItems[itemGroup]) {
      groupedItems[itemGroup] = [];
    }

    groupedItems[itemGroup].push(item);
  });

  return groupedItems;
}
