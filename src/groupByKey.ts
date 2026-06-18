type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((result, item) => {
    const groupValue = String(item[key]);

    if (!result[groupValue]) {
      result[groupValue] = [];
    }

    result[groupValue].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
