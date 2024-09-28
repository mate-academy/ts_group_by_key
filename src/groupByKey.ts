type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Object>(
  items: Object[],
  key: string,
): GroupsMap<Object> {
  const result: GroupsMap<Object> = {};

  items.forEach((item: Object) => {
    result[item[key]] = result[item[key]] || [];
    result[item[key]].push(item);
  });

  return result;
}
