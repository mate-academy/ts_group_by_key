type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items, key:string): GroupsMap {
  const result = {};

  items.forEach((element) => {
    if (result[element[key]]) {
      result[element[key]].push(element);
    } else {
      result[element[key]] = [];
      result[element[key]].push(element);
    }
  });

  return result;
}
