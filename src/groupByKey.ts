type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!(item[key] in result)) {
      result[item[key]] = [item];
    } else {
      result[item[key]].push(item);
    }
  });

  return result;
}
