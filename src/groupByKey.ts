type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items:[], key: string): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  items.forEach((item: {[key: string]: any}): void => {
    if (!Object.prototype.hasOwnProperty.call(result, item[key])) {
      result[item[key]] = [item];
    } else {
      result[item[key]].push(item);
    }
  });

  return result;
}
