type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((grouped: GroupsMap<T>, item: T) => {
    const result = grouped;
    const keyValue = item[key] as string;

    if (!result[keyValue]) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);

    return result;
  }, {});
}
