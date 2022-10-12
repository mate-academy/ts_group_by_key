type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key];

    if (value in groupedItems) {
      groupedItems[value].push(item);
    } else {
      groupedItems[value] = [item];
    }
  });

  return groupedItems;
}
