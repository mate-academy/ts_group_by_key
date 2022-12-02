type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueSortBy: string = `${item[key]}`;

    if (!groupedItems[valueSortBy]) {
      groupedItems[valueSortBy] = [];
    }

    groupedItems[valueSortBy].push(item);
  });

  return groupedItems;
}
