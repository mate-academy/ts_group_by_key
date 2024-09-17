type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item) => {
    const objKey = item[key] as string;

    if (!obj[objKey]) {
      obj[objKey] = [];
    }

    obj[objKey].push(item);
  });

  return obj;
}
