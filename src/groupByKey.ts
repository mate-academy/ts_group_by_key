type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const itemsGrouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    itemsGrouped[itemKey] = [
      ...(itemsGrouped[itemKey] || []), item];
  });

  return itemsGrouped;
}
