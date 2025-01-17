type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((obj: GroupsMap<T>, item: T) => {
    const groupKey = String(item[key]);

    if (!obj[groupKey]) {
      obj[groupKey] = [];
    }

    obj[groupKey].push(item);

    return obj;
  }, {} as GroupsMap<T>);
}
