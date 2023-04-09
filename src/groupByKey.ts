type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const initialValue: GroupsMap<T> = {};

  return items.reduce((acc, item) => {
    const groupKey = String(item[key]);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);

    return acc;
  }, initialValue);
}
