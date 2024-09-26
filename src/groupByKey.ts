type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const value = item[key] as string | number;

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);
  }

  return result;
}
