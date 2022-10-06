type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item) => {
    if (`${item[key]}` in obj) {
      obj[`${item[key]}`].push(item);
    } else {
      obj[`${item[key]}`] = [item];
    }
  });

  return obj;
}
