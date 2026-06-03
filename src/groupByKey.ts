type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(arr: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  arr.forEach((item) => {
    const groupKey = String(item[key]);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  });

  return result;
}
