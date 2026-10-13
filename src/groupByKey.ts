type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!resultObject[groupKey]) {
      resultObject[groupKey] = [];
      resultObject[groupKey].push(item);
    } else {
      resultObject[groupKey].push(item);
    }
  });

  return resultObject;
}
