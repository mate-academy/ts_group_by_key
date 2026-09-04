type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<K extends PropertyKey, T extends Record<K, string>>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const groupName = item[key];

    if (!acc[groupName]) {
      acc[groupName] = [];
    }

    acc[groupName].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
