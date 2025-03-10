type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((res: GroupsMap<T>, item: T) => {
    const groupKey = item[key] as string;

    if (!res[groupKey]) {
      res[groupKey] = [];
    }

    res[groupKey].push(item);

    return res;
  }, {} as GroupsMap<T>);
}
