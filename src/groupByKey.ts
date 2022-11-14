type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grougedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!grougedItems[itemKey]) {
      grougedItems[itemKey] = [];
    }
    grougedItems[itemKey].push(item);
  });

  return grougedItems;
}
