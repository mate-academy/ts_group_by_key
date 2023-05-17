type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  let arr: string[] = [];
  const result: GroupsMap<T> = {};

  arr = items.map((item) => item[key]);
  arr = [...new Set(arr)];

  arr.forEach((item) => {
    result[item] = items.filter((one) => one[key] === item);
  });

  return result;
}
