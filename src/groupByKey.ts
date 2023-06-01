type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((res, item) => {
    const itemKey = String(item[key]);

    res[itemKey] = res[itemKey] || [];
    res[itemKey].push(item);

    return res;
  }, {} as GroupsMap<T>);
}
