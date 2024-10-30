type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): { [k: string]: T[] } {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const value = item[key] as string;

    if (result[value]) {
      result[value].push(item);
    } else {
      result[value] = [item];
    }
  }

  return result;
}
