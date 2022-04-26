type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const object: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = String(item[key]);

    if (!object[currentKey]) {
      object[currentKey] = [];
    }

    object[currentKey].push(item);
  });

  return object;
}
