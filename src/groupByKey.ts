type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((result, item) => {
    const groupKey = item[key] as keyof GroupsMap<T>;

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);

    return result;
  }, {});
}
