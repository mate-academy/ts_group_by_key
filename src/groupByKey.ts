type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const itemsChecked = items.filter((item) => item[key] !== undefined);

  return itemsChecked.reduce((acc, item) => {
    const groupKey = item[key];

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
