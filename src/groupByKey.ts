type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item) => {
    const objValue = String(item[key]);

    if (!obj[objValue]) {
      obj[objValue] = [];
    }
    obj[objValue].push(item);
  });

  return obj;
}
