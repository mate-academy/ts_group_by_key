type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (!obj[`${item[key]}`]) {
      obj[`${item[key]}`] = Array(item);
    } else {
      obj[`${item[key]}`].push(item);
    }
  });

  return obj;
}
