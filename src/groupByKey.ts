type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> | object {
  if (items.length === 0) {
    return {};
  }

  const result: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = item[key] as string;

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }

  return result;
}
