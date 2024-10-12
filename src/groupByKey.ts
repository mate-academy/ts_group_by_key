type GroupsMap<T> = {
  [key: string]: T[];
};

type Value = string | number;

type Obj = {
  [key: string]: Value;
};

export function groupByKey(items: Obj[], key: keyof Obj): GroupsMap<Obj> {
  const result: GroupsMap<Obj> = {};

  items.forEach((item) => {
    if (!(item[key] in result)) {
      result[item[key]] = [item];
    } else {
      result[item[key]].push(item);
    }
  });

  return result;
}
