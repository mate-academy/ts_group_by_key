type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res = items.reduce((acc: GroupsMap<T>, item: T) => {
    const keyForGroup = String(item[key]);

    if (!Object.prototype.hasOwnProperty.call(acc, keyForGroup)) {
      acc[keyForGroup] = [];
    }

    acc[keyForGroup].push(item);

    return acc;
  }, {});

  return res;
}
