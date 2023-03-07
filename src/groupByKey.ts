type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.reduce((acc, item) => {
    const groupKey = item[key];

    if (!(groupKey in acc)) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(item);

    return acc;
  }, grouped);

  return grouped;
}
