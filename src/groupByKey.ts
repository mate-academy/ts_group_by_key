type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedBy: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = String(item[key]);

    if (!groupedBy[groupKey]) {
      groupedBy[groupKey] = [];
    }
    groupedBy[groupKey].push(item);
  }

  return groupedBy;
}
