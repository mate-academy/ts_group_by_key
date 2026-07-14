type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const itemKey = items[i][key];

    if (!(String(itemKey) in result)) {
      result[String(itemKey)] = [items[i]];
    } else {
      result[String(itemKey)].push(items[i]);
    }
  }

  return result;
}
