type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const keyData: any = items[i][key];

    if (result.hasOwnProperty(keyData)) {
      result[keyData].push(items[i]);
    } else {
      result[keyData] = [items[i]];
    }
  }

  return result;
}
