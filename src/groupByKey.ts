type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = item[key];

    if (groupKey === undefined || groupKey === null) {
      continue;
    }

    const keyStr = String(groupKey);

    if (!result[keyStr]) {
      result[keyStr] = [];
    }

    result[keyStr].push(item);
  }

  return result;
}
