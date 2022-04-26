type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const storage: GroupsMap<T> = {};

  items.forEach((item) => {
    const curentKey = String(item[key]);

    if (!storage[curentKey]) {
      storage[curentKey] = [];
    }

    storage[curentKey].push(item);
  });

  return storage;
}
