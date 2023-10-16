type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[], key: keyof T,
): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!groupedItems[item[key]]) {
      groupedItems[item[key]] = [];
    }

    groupedItems[item[key]].push(item);
  });

  return groupedItems;
}
