type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[], key: keyof T,
): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const resultKey = `${item[key]}`;

    if (!(resultKey in resultObj)) {
      resultObj[resultKey] = [];
    }

    resultObj[resultKey].push(item);
  });

  return resultObj;
}
