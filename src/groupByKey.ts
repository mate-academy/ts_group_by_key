type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = items.reduce((accum, item) => {
    const groupKey: string = String(item[key]);

    if (!accum[groupKey]) {
      accum[groupKey] = [];
    }

    accum[groupKey].push(item);

    return accum;
  }, {} as GroupsMap<T>);

  return result;
}
