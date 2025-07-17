type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const obj of items) {
    const objKey = String(obj[key]);

    if (objKey in result) {
      result[objKey].push(obj);
    } else {
      result[objKey] = [obj];
    }
  }

  return result;
}
