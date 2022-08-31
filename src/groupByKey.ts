type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((obj) => {
    const objKey = String(obj[key]);

    if (!resultObj[objKey]) {
      resultObj[objKey] = [];
    }

    resultObj[objKey].push(obj);
  });

  return resultObj;
}
