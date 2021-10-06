type GroupsMap<T> = {
  [key: string]: T[]
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i += 1) {
    const item = items[i];
    const itemKey: string = `${item[key]}`;

    if (result[itemKey]) {
      result[itemKey].push(item);
    } else {
      result[itemKey] = [item];
    }
  }

  return result;
}
