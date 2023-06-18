type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: any) => {
    if (!result[item[key]]) {
      result[item[key]] = [item];
    } else {
      result[item[key]].push(item);
    }
  });

  return result;
}
