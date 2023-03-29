type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T) : GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueOfKey = String(item[key]);

    if (!result[valueOfKey]) {
      result[valueOfKey] = [];
    }

    result[valueOfKey].push(item);
  });

  return result;
}
