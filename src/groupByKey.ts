type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((obj: T) => {
    if (!result[obj[key]]) {
      result[obj[key]] = [obj];
    } else {
      result[obj[key]].push(obj);
    }
  });

  return result;
}
