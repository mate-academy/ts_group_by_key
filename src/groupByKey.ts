type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const initialValue: GroupsMap<T> = {};

  return items.reduce((result, item) => {
    const groupKey = String(item[key]);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);

    return result;
  }, initialValue);
}
