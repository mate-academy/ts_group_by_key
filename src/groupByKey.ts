/* eslint-disable no-param-reassign */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  return items.reduce((accum: GroupsMap<T>, curr) => {
    const prop = curr[key as keyof object];

    if (accum[prop]) {
      accum[prop].push(curr);
    }

    if (!accum[prop]) {
      accum[prop] = [curr];
    }

    return accum;
  }, {});
}
