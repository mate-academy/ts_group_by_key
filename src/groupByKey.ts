type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const value = String(item[key]);

    if (!result[value]) {
      result[value] = [item];
    } else {
      result[value].push(item);
    }
  }

  return result;
}
