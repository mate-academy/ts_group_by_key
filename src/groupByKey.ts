type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (result.hasOwnProperty(groupKey)) {
      result[groupKey].push(item);
    } else {
      result[groupKey] = [item];
    }
  });

  return result;
}
