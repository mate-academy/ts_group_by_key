type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const obj of items) {
    const val = String(obj[key]);

    if (result[val]) {
      result[val].push(obj);
    } else {
      result[val] = [obj];
    }
  }

  return result;
}
