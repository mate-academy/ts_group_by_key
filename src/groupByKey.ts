type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const map = new Map<string, T[]>();

  for (const item of items) {
    const rawKey = item[key];
    const stringKey = String(rawKey);

    if (!map.has(stringKey)) {
      map.set(stringKey, []);
    }

    map.get(stringKey)!.push(item);
  }

  const result: GroupsMap<T> = {};

  map.forEach((value, mapKey) => {
    result[mapKey] = value;
  });

  return result;
}
