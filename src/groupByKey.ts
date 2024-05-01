type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const value = item[key];

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);
  }

  return result;
}
