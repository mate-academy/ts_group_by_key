type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const accum: GroupsMap<T> = {};

  for (const item of items) {
    const rawValue = item[key];
    const value =
      rawValue === null
        ? 'null'
        : rawValue === undefined
          ? 'undefined'
          : String(rawValue);

    if (!accum[value]) {
      accum[value] = [];
    }

    accum[value].push(item);
  }

  return accum;
}
