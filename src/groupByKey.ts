type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: Array<object>,
  key: string,
): GroupsMap<object> {
  // write code here;
  const result: GroupsMap<object> = {};

  items.forEach((item: object) => {
    const newKey: any = item[key];

    if (result[newKey]) {
      result[newKey].push(item);
    } else {
      result[newKey] = [item];
    }
  });

  return result;
}
