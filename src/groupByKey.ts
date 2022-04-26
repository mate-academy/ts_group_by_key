type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((obj) => {
    const property = String(obj[key]);

    if (!resultObj[property]) {
      resultObj[property] = [];
    }

    resultObj[property].push(obj);
  });

  return resultObj;
}
