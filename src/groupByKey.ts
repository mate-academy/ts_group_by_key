type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const currKey = item[key].toString();

    if (result[currKey] === undefined) {
      result[currKey] = [item];
    } else {
      result[currKey].push(item);
    }
  });

  return result;
}
