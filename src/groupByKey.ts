type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items:GroupsMap<string | number>,
  key:string,
):GroupsMap<string | number> {
  const result:GroupsMap<string | number> = {};

  items.forEach((item) => {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }
    result[item[key]].push(item);
  });

  return result;
}
