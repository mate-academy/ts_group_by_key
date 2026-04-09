type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!result[value]) {
      result[value] = [];
    }
    result[value].push(item);
  });

  return result;
}
