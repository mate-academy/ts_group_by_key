type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K & (string | number | symbol),
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const groupOfKey = item[key];
    const groupOfKeyString = String(groupOfKey);

    if (!result[groupOfKeyString]) {
      result[groupOfKeyString] = [];
    }

    result[groupOfKeyString].push(item);
  }

  return result;
}
