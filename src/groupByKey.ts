type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items:GroupsMap<string | number>,
  key:string,
):GroupsMap<string | number> {
  const resalt:GroupsMap<string | number> = {};

  items.forEach((item) => {
    if (!resalt[item[key]]) {
      resalt[item[key]] = [];
    }
    resalt[item[key]].push(item);
  });

  return resalt;
}
