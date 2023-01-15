type GroupsMap<T> = {
  [key: string]: T[];
};

type Obj = {
  [key: string]: any;
};

export function groupByKey(items: Obj[], key: string): GroupsMap<Obj> {
  const result: GroupsMap<Obj> = {};
  const newItems = [...items].sort((current, prev) => current[key] - prev[key]);

  newItems.map((el): void => {
    if (!(el[key] in result)) {
      result[`${el[key]}`] = [];
    }

    result[`${el[key]}`].push(el);

    return undefined;
  });

  return result;
}
