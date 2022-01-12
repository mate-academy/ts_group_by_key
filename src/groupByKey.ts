type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = `${item[key]}`;

    groupedItems[itemKey] = items.filter((el) => el[key] === item[key]);
  });

  return groupedItems;
}
