type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const keyValue = item[key];
    const keyValueStr = String(keyValue);

    if (!result[keyValueStr]) {
      result[keyValueStr] = [];
    }
    result[keyValueStr].push(item);
  }

  return result;
}
