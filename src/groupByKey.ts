type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  if (!items) {
    return {};
  }

  const sort: GroupsMap<T> = {};

  items.forEach((item) => {
    const strKey: string = String(item[key]);

    if (Object.prototype.hasOwnProperty.call(sort, strKey)) {
      sort[strKey].push(item);
    } else {
      sort[strKey] = [];
      sort[strKey].push(item);
    }
  });

  return sort;
}
