type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): object {
  const result: GroupsMap<string> = {};

  items.forEach((item) => {
    if (result[item[key]] === undefined) {
      result[item[key]] = [];
    }

    result[item[key]].push(item);
  });

  return result;
}
