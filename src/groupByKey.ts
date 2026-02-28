type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const itemValue: string = String(item[key]);

    if (!Object.hasOwn(result, itemValue)) {
      result[itemValue] = [];
    }

    result[itemValue].push(item);
  }

  return result;
}
