type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((map: GroupsMap<T>, item: T) => {
    const groupValue = String(item[key]);

    if (!map[groupValue]) {
      map[groupValue] = [];
    }

    map[groupValue].push(item);

    return map;
  }, {});
}
