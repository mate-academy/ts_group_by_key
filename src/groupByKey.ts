type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  return items.reduce((prev: GroupsMap<T>, item: T): GroupsMap<T> => {
    const itKey = item[key];
    const obj = prev;

    if (!prev[itKey]) {
      obj[itKey] = [];
    }

    obj[itKey].push(item);

    return obj;
  }, {});
}
