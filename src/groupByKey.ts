type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const currentKey = String(item[key]);

    result[currentKey] = result[currentKey]
      ? [...result[currentKey], item]
      : [item];
  }

  return result;
}
