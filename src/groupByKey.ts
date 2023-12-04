type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};
  const distinct = [...items.map((item:T) => `${item[key]}`)];

  distinct.forEach((elem) => {
    result[elem] = items.filter((item:T) => `${item[key]}`
    === elem);
  });

  return result;
}
