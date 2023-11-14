type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] ? (item[key] as string) : '';

    return result[keyValue] ? result[keyValue].push(item)
      : (result[keyValue] = [item]);
  });

  return result;
}
