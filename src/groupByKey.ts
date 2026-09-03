type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((a, item) => {
    const keyValue = String(item[key]);

    if (!a[keyValue]) {
      a[keyValue] = [];
    }

    a[keyValue].push(item);

    return a;
  }, {} as GroupsMap<T>);
}
