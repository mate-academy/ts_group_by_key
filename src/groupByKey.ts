type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemKey = `${item[key]}`;

    if (itemKey in result) {
      result[itemKey].push(item);

      return;
    }

    result[itemKey] = [item];
  });

  return result;
}
