type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!result[groupKey]) {
      result[groupKey] = items.filter((elem) => groupKey === String(elem[key]));
    }
  });

  return result;
}
