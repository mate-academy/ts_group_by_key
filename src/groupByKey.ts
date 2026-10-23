type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const group = String(item[key]);

    if (!result[group]) {
      result[group] = [];
    }

    result[group].push(item);
  }

  return result;
}
