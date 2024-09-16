type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i += 1) {
    const itemKey = items[i][key] as string;

    if (!result[itemKey]) {
      result[itemKey] = [];
    }

    result[itemKey].push(items[i]);
  }

  return result;
}
