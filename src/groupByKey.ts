type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemValue = item[key] as string;

    if (!groupedItems[itemValue]) {
      groupedItems[itemValue] = [];
    }

    groupedItems[itemValue].push(item);
  });

  return groupedItems;
}
