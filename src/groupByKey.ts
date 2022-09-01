type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key:keyof T):GroupsMap<T> {
  const valueOfKeyArr:string[] = [];
  const resultGroup:GroupsMap<T> = {};

  items.forEach((item) => {
    if (!valueOfKeyArr.includes(String(item[key]))) {
      valueOfKeyArr.push(String(item[key]));
    }
  });

  valueOfKeyArr.forEach((valueOfKey) => (
    resultGroup[valueOfKey] = items.filter((item) => (
      String(item[key]) === valueOfKey))));

  return resultGroup;
}
