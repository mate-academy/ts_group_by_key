type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyOfObject = item[key];
    const groupKey = String(keyOfObject);

    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(item);
  });

  return grouped;
}
