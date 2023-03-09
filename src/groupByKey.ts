type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const item: T = items[i];
    const groupBy: keyof GroupsMap<T> = String(item[key]);

    groupedItems[groupBy]
      = items.filter((element) => String(element[key]) === groupBy);
  }

  return groupedItems;
}
