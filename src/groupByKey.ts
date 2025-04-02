type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, currentItem: T) => {
    const groupKey = String(currentItem[key]);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(currentItem);

    return result;
  }, {} as GroupsMap<T>);
}
