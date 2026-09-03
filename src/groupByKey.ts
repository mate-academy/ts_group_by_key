type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const group: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = item[key] as string | number;

    if (!group[groupKey]) {
      group[groupKey] = [];
    }

    group[groupKey].push(item);
  }

  return group;
}
