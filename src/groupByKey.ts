type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const groupKey = String(item[key]); // Convert the key to a string

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);

    return result;
  }, {});
}
