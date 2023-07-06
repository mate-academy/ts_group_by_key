type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<P>(items: P[], key: keyof P): GroupsMap<P> {
  const groupedItems: GroupsMap<P> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    groupedItems[itemKey] = [...(groupedItems[itemKey] || []), item];
  });

  return groupedItems;
}
