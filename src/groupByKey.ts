/* eslint-disable no-param-reassign */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item) => {
    const property = String(item[key]);

    if (!Object.prototype.hasOwnProperty.call(result, property)) {
      result[property] = [];
    }

    result[property].push(item);

    return result;
  }, {});
}
