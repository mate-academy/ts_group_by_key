type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result, item) => {
    const groupKey = item[key] as string;

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
