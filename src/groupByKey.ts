type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T, key: keyof T): GroupsMap<T> {
  const sortedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortValue = `${item[key]}`;

    if (!sortedItems[sortValue]) {
      sortedItems[sortValue] = [];
    }

    sortedItems[sortValue].push(item);
  });

  return sortedItems;
}
