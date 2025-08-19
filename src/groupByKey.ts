type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: Array<T>,
  key: keyof T,
): GroupsMap<T> {
  // write code here;
  const map: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i++) {
    if (!map[items[i][key] as string]) {
      map[items[i][key] as string] = [items[i]];
    } else {
      map[items[i][key] as string].push(items[i]);
    }
  }

  return map;
}
