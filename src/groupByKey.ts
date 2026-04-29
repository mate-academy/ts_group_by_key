type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;

  return items.reduce((obj: GroupsMap<T>, item: T) => {
    const objKey = String(item[key]);

    if (!obj[objKey]) {
      obj[objKey] = [];
    }

    obj[objKey].push(item);

    return obj;
  }, {});
}
