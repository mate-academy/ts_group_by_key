type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const hey of items) {
    const groupKey = String(hey[key]);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(hey);
  }

  return result;
}
