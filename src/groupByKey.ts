type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((accumulator: GroupsMap<T>, item: T) => {
    const value = String(item[key]);

    if (!accumulator[value]) {
      accumulator[value] = [];
    }

    accumulator[value].push(item);

    return accumulator;
  }, {});
}
