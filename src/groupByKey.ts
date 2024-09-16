type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T):GroupsMap<T> {
  const obj : GroupsMap<T> = {};

  items.forEach((el) => {
    obj[el[key] as string] = items.filter((elem) => el[key] === elem[key]);
  });

  return obj;
}
