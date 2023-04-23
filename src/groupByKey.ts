type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const resKeys: string[] = items.map((item) => item[key]);
  const res = {};

  resKeys.forEach((el) => {
    res[el] = items.filter((item: T) => item[key] === el);
  });

  return res;
}
