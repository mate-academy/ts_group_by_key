type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!(value in groupedItems)) {
      groupedItems[value] = [];
    }

    groupedItems[value].push(item);
  });

  return groupedItems;
}
