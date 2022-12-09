type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items:{} [], key: string): GroupsMap<{}> {
  const result: GroupsMap<{}> = {};

  items.forEach((x:any) => {
    if (!result[x[key]]) {
      const m: {} [] = [];

      m.push(x);
      result[x[key]] = m;
    } else {
      result[x[key]].push(x);
    }
  });

  return result;
}
