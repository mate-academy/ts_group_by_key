type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((item: T): void => {
    const itemKey = String(item[key]);

    resultObj[itemKey] = resultObj[itemKey] || [];
    resultObj[itemKey].push(item);
  });

  return resultObj;
}
