type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((accum: GroupsMap<T>, item) => {
    const itemKey = item[key];
    const result = accum;

    if (!result[itemKey]) {
      result[itemKey] = [];
    }

    result[itemKey].push(item);

    return result;
  }, {});
}
