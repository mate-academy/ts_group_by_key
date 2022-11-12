
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  let obj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = item[key];

    if (typeof value === 'string' || typeof value === 'number') {
      if (!obj[value]) {
        obj = {
          ...obj,
          [value]: [],
        };
      }
      obj[value].push(item);
    }
  });

  return obj;
}
