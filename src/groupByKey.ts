type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const group = String(item[key]);

    if (!result[group]) {
      result[group] = [];
    }

    result[group].push(item);
  }

  return result;
}
