type GroupsMap<T> = {
  [key: string]: T[];
};

type Obj = {
  [key: string]: any;
};

export function groupByKey(items: Obj[], key: string): GroupsMap<Obj> {
  const result: GroupsMap<Obj> = {};
  const newItems: Obj[] = [...items];

  newItems.sort((current, prev) => current[key] - prev[key]);

  newItems.map((el): null => {
    if (!(el[key] in result)) {
      result[`${el[key]}`] = [];
    }

    result[`${el[key]}`].push(el);

    return null;
  });

  return result;
}
