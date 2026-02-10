type GroupsMap<T> = Record<string | number, T[]>;

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const groupedKey = items[i][key] as string | number;

    if (!result[groupedKey]) {
      result[groupedKey] = [];
    }

    result[groupedKey].push(items[i]);
  }

  return result;
}
