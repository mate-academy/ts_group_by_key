type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((it: T) => {
    const objKey = String(it[key]);

    if (!obj[objKey]) {
      obj[objKey] = [];
    }
    obj[objKey].push(it);
  });

  return obj;
}
