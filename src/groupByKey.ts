type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupBy: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = item[key] as string;

    if (!(groupBy[itemKey])) {
      groupBy[itemKey] = [];
    }

    groupBy[itemKey].push(item);
  });

  return groupBy;
}
