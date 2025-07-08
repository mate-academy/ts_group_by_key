type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T>  {
  const sorted: GroupsMap<T> = {};

  for (const obj of items) {
    const groupKey = String(obj[key]);

    if (groupKey in sorted) {
      sorted[groupKey].push(obj);
    } else {
      sorted[groupKey] = [obj];
    }
  }

  return sorted;
}
