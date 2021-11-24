type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: any[], key: string): {} {
  const result: GroupsMap<string> = {};

  for (const item of items) {
    result[item[key]] = items.filter(obj => obj[key] === item[key]);
  }

  return result;
}
