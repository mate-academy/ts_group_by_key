type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!resultObj[`${item[key]}`]) {
      resultObj[`${item[key]}`] = [];
    }

    resultObj[`${item[key]}`].push(item);
  });

  return resultObj;
}
