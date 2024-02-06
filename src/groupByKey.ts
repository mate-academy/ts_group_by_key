type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!result[itemKey]) {
      result[itemKey] = [item];
    } else {
      result[itemKey].push(item);
    }
  });

  return result;
}
