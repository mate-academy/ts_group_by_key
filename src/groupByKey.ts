type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((res, item) => {
    const groupKey = String(item[key]);
    const result = { ...res };

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
