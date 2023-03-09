type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: any[], key: string): GroupsMap<Object> {
  const obj: GroupsMap<Object> = {};

  items.forEach((item) => {
    if (!obj[item[key]]) {
      obj[item[key]] = [item];
    } else {
      obj[item[key]].push(item);
    }
  });

  return obj;
}
