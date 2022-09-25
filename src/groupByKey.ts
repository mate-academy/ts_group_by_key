type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: any[], key: keyof T): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  items.forEach((item) => {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }

    result[item[key]].push(item);
  });

  return result;
}
