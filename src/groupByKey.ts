type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const resultKey = item[key] as string;

    if (!(resultKey in result)) {
      result[resultKey] = [];
    }

    result[resultKey].push(item);
  }

  return result;
}
