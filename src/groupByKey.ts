type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const value = String(item[key]);

    if (!Object.prototype.hasOwnProperty.call(result, value)) {
      result[value] = [];
    }

    result[value].push(item);
  }

  return result;
}
