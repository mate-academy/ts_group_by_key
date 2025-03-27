type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((result, item) => {
    const keyValue = item[key];
    const keyString = String(keyValue);

    if (!result[keyString]) {
      result[keyString] = [];
    }

    result[keyString].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
