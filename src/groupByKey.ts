type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const obj = items[i];
    const objKey = `${obj[key]}`;

    if (!result[objKey]) {
      result[objKey] = [obj];
    } else {
      result[objKey].push(obj);
    }
  }

  return result;
}
