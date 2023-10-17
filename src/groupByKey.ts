type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof string): GroupsMap<T> {
  const result = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const item of items) {
    const currentKey: string = item[key];

    if (!result[currentKey]) {
      result[currentKey] = [];
    }

    result[currentKey].push(item);
  }

  return result;
}
