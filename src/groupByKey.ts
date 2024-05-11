type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const i of items) {
    const value = String(i[key]);

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(i);
  }

  return result;
}
