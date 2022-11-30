type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const result:GroupsMap<object> = {};

  items.forEach((element: object) => {
    const sortKey:string = element[key];

    if (result[sortKey]) {
      result[sortKey].push(element);
    } else {
      result[sortKey] = [element];
    }
  });

  return result;
}
