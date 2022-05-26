type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const filteredObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const val = String(item[key]);

    if (!filteredObj[val]) {
      filteredObj[val] = [item];
    } else {
      filteredObj[val].push(item);
    }
  });

  return filteredObj;
}
