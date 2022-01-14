type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const objProp = String(item[key]);

    if (!resultObj[objProp]) {
      resultObj[objProp] = [];
    }

    resultObj[objProp].push(item);
  });

  return resultObj;
}
