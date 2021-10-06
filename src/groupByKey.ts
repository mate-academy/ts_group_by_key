type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const nameKey = `${item[key]}`;

    if (resultObj[nameKey]) {
      resultObj[nameKey].push(item);
    } else {
      resultObj[nameKey] = [item];
    }
  });

  return resultObj;
}
