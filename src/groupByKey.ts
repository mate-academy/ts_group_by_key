type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const requiredKey = String(item[key]);

    if (!resultObj[requiredKey]) {
      resultObj[requiredKey] = [];
    }

    resultObj[requiredKey].push(item);
  });

  return resultObj;
}
