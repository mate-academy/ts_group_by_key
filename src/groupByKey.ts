type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const element of items) {
    const value = String(element[key]);

    if (result[value]) {
      result[value].push(element);
    } else {
      result[value] = [element];
    }
  }

  return result;
}
