type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item) => {
    if (obj[`${item[key]}`]) {
      obj[`${item[key]}`].push(item);
    } else {
      obj[`${item[key]}`] = [item];
    }
  });

  return obj;
}
