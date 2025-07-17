type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const obj of items) {
    if (obj[key] in result) {
      result[obj[key]].push(obj);
    } else {
      result[obj[key]] = [obj];
    }
  }

  return result;
}
