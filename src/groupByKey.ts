type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (itemKey in result) {
      result[itemKey].push(item);
    } else {
      result[itemKey] = [item];
    }
  });

  return result;
}
