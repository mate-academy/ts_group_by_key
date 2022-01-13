type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: T): GroupsMap<T> {
  const storage: GroupsMap<T> = {};

  items.forEach((item) => {
    const storageKey = `${item[key]}`;

    if (storage[storageKey]) {
      storage[storageKey].push(item);
    } else {
      storage[storageKey] = [item];
    }
  });

  return storage;
}
