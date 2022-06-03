type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const resultObj: GroupsMap<object> = {};

  items.forEach((element) => {
    if (!(element[key] in resultObj)) {
      resultObj[String(element[key])] = [element];
    } else if (element[key] in resultObj) {
      resultObj[element[key]].push(element);
    }
  });

  return resultObj;
}
