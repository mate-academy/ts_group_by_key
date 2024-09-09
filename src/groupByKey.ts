type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = String(item[key]);

    if (!resultObj[currentKey]) {
      resultObj[currentKey] = [];
    }
    resultObj[currentKey].push(item);
  });

  return resultObj;
}
