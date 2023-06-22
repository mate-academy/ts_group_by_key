type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, Key extends keyof T>(
  items: T[],
  key: Key,
): GroupsMap<T> {
  const grouped = {} as GroupsMap<T>;

  items.forEach((item) => {
    const groupedKey = <string>item[key];

    if (grouped[groupedKey]) {
      grouped[groupedKey].push(item);
    } else {
      grouped[groupedKey] = [item];
    }
  });

  return grouped;
}
