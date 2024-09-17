type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.reduce((accumulator, item) => {
    const keyValue = String(item[key]);

    accumulator[keyValue] = accumulator[keyValue] || [];
    accumulator[keyValue].push(item);

    return accumulator;
  }, groupedItems);

  return groupedItems;
}
