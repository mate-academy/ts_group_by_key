type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    resObj[String(item[key])] = [];
  });

  items.forEach((item: T) => {
    resObj[String(item[key])].push(item);
  });

  return resObj;
}
