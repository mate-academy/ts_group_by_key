type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  items.forEach((obj) => {
    if (!Object.prototype.hasOwnProperty.call(result, obj[key])) {
      result[obj[key]] = [obj];
    } else {
      result[obj[key]].push(obj);
    }
  });

  return result;
}
