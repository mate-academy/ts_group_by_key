type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const name = String(items[i][key]);

    if ((!result[name])) {
      result[name] = [items[i]];
    } else {
      result[name].push(items[i]);
    }
  }

  return result;
}
