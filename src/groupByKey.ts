type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems = {};

  items.forEach((item) => {
    const value = item[key].toString();

    if (!(value in groupedItems)) {
      groupedItems[value] = [];
    }

    groupedItems[value].push(item);
  });

  return groupedItems;
}
