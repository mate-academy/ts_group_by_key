type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, R extends keyof T>(
  items: T[],
  key: R,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const itemValue: string = String(item[key]);

    if (!result[itemValue]) {
      result[itemValue] = [];
    }

    result[itemValue].push(item);
  }

  return result;
}
