type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const item of items) {
    const value: string | number = item[key];

    if (result[value] !== undefined) {
      result[value].push(item);
    }

    if (result[value] === undefined) {
      result[value] = [];
      result[value].push(item);
    }
  }

  return result;
}
