type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<string> {
  const storage: GroupsMap<string> = {};

  for (const item of items) {
    storage[item[key]]
      ? storage[item[key]].push(item)
      : storage[item[key]] = [item];
  }

  return storage;
}
