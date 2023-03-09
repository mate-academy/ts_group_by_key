type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(arr: T[], key: keyof T): GroupsMap<T> {
  return arr.reduce((grouped: GroupsMap<T>, item: T) => {
    const value = String(item[key]);
    const copyGrouped = { ...grouped };

    copyGrouped[value] ??= [];

    copyGrouped[value].push(item);

    return copyGrouped;
  }, {});
}
