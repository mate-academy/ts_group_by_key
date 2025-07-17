type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const obj of items) {
    if (String(obj[key]) in result) {
      result[String(obj[key])].push(obj);
    } else {
      result[String(obj[key])] = [obj];
    }
  }

  return result;
}
