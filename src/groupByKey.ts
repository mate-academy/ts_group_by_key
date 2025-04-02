type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const groupKey = items[i][key];

    if (!resultObj[groupKey]) {
      resultObj[groupKey] = [];
    }

    resultObj[groupKey].push(items[i]);
  }

  return resultObj;
}
