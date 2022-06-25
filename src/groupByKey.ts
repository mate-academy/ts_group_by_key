type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items, key): GroupsMap<object> {
  const resultObj: GroupsMap<object> = {};

  items.forEach((obj) => {
    const value = String(obj[key]);

    if (!resultObj[value]) {
      resultObj[value] = [];
    }

    resultObj[value].push(obj);
  });

  return resultObj;
}
