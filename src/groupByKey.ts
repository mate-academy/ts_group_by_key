type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortValue: string = `${item[key]}`;

    if (!groupedItems[sortValue]) {
      groupedItems[sortValue] = [];
    }

    groupedItems[sortValue].push(item);
  });

  return groupedItems;
}
