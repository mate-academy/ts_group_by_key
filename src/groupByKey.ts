type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedGroupByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!sortedGroupByKey[groupKey]) {
      sortedGroupByKey[groupKey] = [];
    }

    sortedGroupByKey[groupKey].push(item);
  });

  return sortedGroupByKey;
}
