type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const keysArr = items.map((el) => el[key]);
  const obj: GroupsMap<T> = {};

  keysArr.forEach((k) => {
    obj[k] = items.filter((item) => k === item[key]);
  });

  return obj;
}
