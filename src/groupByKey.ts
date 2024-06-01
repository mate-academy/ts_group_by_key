type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const keyValue = String(item[key]);

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
