type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  return items.reduce((object: GroupsMap<T>, item: T) => {
    const groupKey: string = String(item[key]);

    if (object[groupKey]) {
      object[groupKey].push(item);
    } else {
      // eslint-disable-next-line no-param-reassign
      object[groupKey] = [item];
    }

    return object;
  }, {});
}
