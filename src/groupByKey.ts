type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemValue = String(item[key]);

    groupItems[itemValue] = items.filter((obj) => obj[key] === item[key]);
  });

  return groupItems;
}
