type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T) : GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.reduce((acc, curr) => {
    const value = String(curr[key]);

    acc[value] = acc[value] || [];

    acc[value].push(curr);

    return acc;
  }, groupedItems);

  return groupedItems;
}
