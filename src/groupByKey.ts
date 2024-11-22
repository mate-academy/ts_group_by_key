type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((accum, item) => {
    const currentKey = String(item[key]);

    if (!accum[currentKey]) {
      accum[currentKey] = [];
    }
    accum[currentKey].push(item);

    return accum;
  }, {} as GroupsMap<T>);
}
