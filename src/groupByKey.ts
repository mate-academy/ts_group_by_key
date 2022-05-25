type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, R extends keyof T>(
  items: T[],
  key: R,
): object {
  const groupedItems: GroupsMap<T> = {};

  items.filter((item: T) => {
    const value = String(item[key]);

    if (groupedItems[value]) {
      groupedItems[value].push(item);
    } else {
      groupedItems[value] = [item];
    }

    return {};
  });

  return groupedItems;
}
