type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const objKey = item[key] as string;

    if (obj[objKey]) {
      obj[objKey].push(item);
    } else {
      obj[objKey] = [item];
    }
  });

  return obj;
}
