type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemKey: string = item[key as keyof object];

    if (!result[itemKey]) {
      result[itemKey] = [];
    }

    result[itemKey].push(item);
  });

  return result;
}
