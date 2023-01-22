type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey: string = item[key];

    if (!resultObj[itemKey]) {
      resultObj[itemKey] = [];
    }

    resultObj[itemKey].push(item);
  });

  return resultObj;
}
