type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const result:GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    result[groupKey] = [];
  });

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (Object.hasOwnProperty.call(result, groupKey)) {
      result[groupKey].push(item);
    }
  });

  return result;
}
