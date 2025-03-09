
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key:keyof T):GroupsMap<T> {
  const result:GroupsMap<T> = {};

  items.forEach((item:T) => {
    result[String(item[key])] = [];
  });

  items.forEach((item:T) => {
    result[String(item[key])].push(item);
  });

  return result;
  // write code here;
}
