type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = `${item[key]}`;

    if (!groupedItems[keyValue]) {
      groupedItems[keyValue] = [];
    }

    groupedItems[keyValue].push(item);
  });

  return groupedItems;
}
