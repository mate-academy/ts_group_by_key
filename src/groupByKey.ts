type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((el) => {
    const itemKey = String(el[key]);

    if (!result[itemKey]) {
      result[itemKey] = [];
    }
    result[itemKey].push(el);
  });

  return result;
}
