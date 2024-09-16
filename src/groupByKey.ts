type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((result, item) => {
    const value = item[key];

    if (!result[value]) {
      result[value] = [];
    }
    result[value].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
