type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], inputKey: keyof T):GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};
  const key = String(inputKey);

  items.forEach((elem) => {
    if (resultObj[elem[key]]) {
      resultObj[elem[key]].push(elem);
    } else {
      resultObj[elem[key]] = [elem];
    }
  });

  return resultObj;
}
