type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = items.reduce((total: any, curr: T) => {
    if (!total[curr[key]]) {
      // eslint-disable-next-line no-param-reassign
      total[curr[key]] = [];
    }

    total[curr[key]].push(curr);

    return total;
  }, {});

  return group;
}
