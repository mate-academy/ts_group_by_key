type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((obj) => {
    const objKey = obj[key];

    if (result[objKey]) {
      result[objKey].push(obj);
    } else {
      result[objKey] = [obj];
    }
  });

  return result;
}
