type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const grouped = String(item[key]);

    if (!result[grouped]) {
      result[grouped] = [];
    }

    result[grouped].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
