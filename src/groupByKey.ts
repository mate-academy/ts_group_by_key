type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const keyValue = String(item[key]);

    if (!(keyValue in result)) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);
  }

  return result;
}
