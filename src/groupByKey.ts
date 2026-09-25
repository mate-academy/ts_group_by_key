type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const groupValue = String(item[key]);

    if (!result[groupValue]) {
      result[groupValue] = [];
    }

    result[groupValue].push(item);
  }

  return result;
}
