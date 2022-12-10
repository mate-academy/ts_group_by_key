/* eslint no-param-reassign: "error" */

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(items: T[], key: K):
GroupsMap<T> {
  const result: GroupsMap<T> = items.reduce((
    resultOb: GroupsMap<T>, x: any,
  ) => {
    if (!resultOb[x[key]]) {
      resultOb[x[key]] = [];
    }
    resultOb[x[key]].push(x);

    return resultOb;
  }, {});

  return result;
}
