type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const object: GroupsMap<T> = {};

  items.forEach((e) => {
    const newKey = String(e[key]);

    if (!(newKey in object)) {
      object[newKey] = [];
    }

    object[newKey].push(e);
  });

  return object;
}
