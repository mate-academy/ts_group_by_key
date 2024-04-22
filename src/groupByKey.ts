type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const indexedKey = key as keyof T;
    const indexedItem = item[indexedKey];

    if (!result.hasOwnProperty(String(indexedItem))) {
      result[String(indexedItem)] = [item];
    } else {
      result[String(indexedItem)].push(item);
    }
  }

  return result;
}
