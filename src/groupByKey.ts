type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends any>(items: T[],
  key: keyof T): GroupsMap<T> {
  return items.reduce<T, GroupsMap<T>>((total, curr) => {
    if (!total[curr[key]]) {
      // eslint-disable-next-line no-param-reassign
      total[curr[key]] = [];
    }

    total[curr[key]].push(curr);

    return total;
  }, {});
}
