type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups, item) => {
    const keyValue = String(item[key]);
    const result = groups;

    if (!groups[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
