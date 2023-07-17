type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj : GroupsMap<T> = {};

  items.forEach((item) => {
    obj[item[key] as string] = items.filter((elem) => item[key] === elem[key]);
  });

  return obj;
}
