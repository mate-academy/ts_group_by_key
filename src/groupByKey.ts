type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Element>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = String(item[key]);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }

  return result;
}
