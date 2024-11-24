type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const keyValue = items[i][key];

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(items[i]);
  }

  return result;
}
