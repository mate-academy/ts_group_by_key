type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key:keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((el) => {
    const val = String(el[key]);

    if (!obj[val]) {
      obj[val] = [];
    }
    obj[val].push(el);
  });

  return obj;
}
