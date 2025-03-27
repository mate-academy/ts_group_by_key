type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const map: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = item[key];

    map[groupKey] ??= [];

    map[groupKey].push(item);
  }

  return map;
}
