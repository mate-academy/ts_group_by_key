type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item extends Record<string, any>>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  return items.reduce((groups, item) => {
    const keyValue = item[key];

    const groupKey = typeof keyValue === 'string' ? keyValue : String(keyValue);

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);

    return groups;
  }, {} as GroupsMap<Item>);
}
