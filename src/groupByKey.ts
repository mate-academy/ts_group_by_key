type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((obj) => {
    const objKey = `${obj[key]}`;

    if (!result[objKey]) {
      result[objKey] = [obj];
    } else {
      result[objKey].push(obj);
    }
  });

  return result;
}
