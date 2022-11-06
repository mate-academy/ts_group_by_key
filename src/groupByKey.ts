type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: GroupsMap<T>[], key: keyof T): {} {
  return items.reduce((objectsByKeyValue, obj) => ({
    ...objectsByKeyValue,
    [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj),
  }), {});
}
