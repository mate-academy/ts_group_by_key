type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupedKey = String(item[key]);

    if (!result[groupedKey]) {
      result[groupedKey] = [];
    }
    result[groupedKey].push(item);
  });

  return result;
}
