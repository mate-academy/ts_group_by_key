/* eslint-disable no-param-reassign */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const value = item[key] as string;

    if (!result[value]) {
      result[value] = [];
    }
    result[value].push(item);

    return result;
  }, {});
}
