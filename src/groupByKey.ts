type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T) : GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.reduce((acc, curr) => {
    const keyValue = String(curr[key]);

    acc[keyValue] = acc[keyValue] || [];

    acc[keyValue].push(curr);

    return acc;
  }, groupedItems);

  return groupedItems;
}
