type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prev, item) => {
    const itemKey = String(item[key]);

    if (!prev[itemKey]) {
      // eslint-disable-next-line no-param-reassign
      prev[itemKey] = [item];
    } else {
      prev[itemKey].push(item);
    }

    return prev;
  }, {});
}
