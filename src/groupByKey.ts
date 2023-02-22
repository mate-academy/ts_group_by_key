type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: object[],
  key: keyof object,
): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  items.forEach((item: object) => {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }

    return result[item[key]].push(item);
  });

  return result;
}
