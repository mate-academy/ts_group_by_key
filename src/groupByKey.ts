type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const currKey = String(item[key]);

    if (!resultObj[currKey]) {
      resultObj[currKey] = [];
    }

    resultObj[currKey].push(item);
  });

  return resultObj;
}
