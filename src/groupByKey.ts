type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const groupValue = items[i][key];
    const groupKeyString = String(groupValue);

    if (result[groupKeyString] !== undefined) {
      result[groupKeyString].push(items[i]);
    } else {
      result[groupKeyString] = [items[i]];
    }
  }

  return result;
}
