type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Object>(
  items: T[],
  key: string,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const keyValue = item[key];

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);
  }

  return result;
}
