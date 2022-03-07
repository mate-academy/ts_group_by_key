type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const resultObj:GroupsMap<T> = {};

  items.map((item:T):T => {
    if (item[key] in resultObj) {
      resultObj[item[key]].push(item);
    } else {
      resultObj[item[key]] = [item];
    }

    return item;
  });

  return resultObj;
}
