type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i + 1) {
    const newKey = `${items[i][key]}`;

    if (result[newKey]) {
      result[newKey].push(items[i]);
    } else {
      result[newKey] = [items[i]];
    }
  }

  return result;
}
