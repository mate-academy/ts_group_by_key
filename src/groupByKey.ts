type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): T {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const group = item[key];

    if (!(group in result)) {
      result[group] = [];
    }
    result[group].push(item);
  }

  return result;
}
