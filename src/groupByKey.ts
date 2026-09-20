type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const newKey = String(item[key]);

    if (!result[newKey]) {
      result[newKey] = [];
    }

    result[newKey].push(item);
  }

  return result;
}
