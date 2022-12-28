
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const value = String(items[i][key]);

    if (Object.prototype.hasOwnProperty.call(result, value)) {
      result[value].push(items[i]);
    } else {
      Object.assign(result, { [value]: [items[i]] });
    }
  }

  return result;
}
