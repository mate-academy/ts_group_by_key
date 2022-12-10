/* eslint no-param-reassign: "error" */

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items:{} [], key: string): GroupsMap<{}> {
  const result: GroupsMap<{}> = items.reduce((
    resultOb: GroupsMap<{}>, x: any,
  ) => {
    if (!resultOb[x[key]]) {
      const arrayComponent: {} [] = [];

      arrayComponent.push(x);
      resultOb[x[key]] = arrayComponent;
    } else {
      resultOb[x[key]].push(x);
    }

    return resultOb;
  }, {});

  return result;
}
