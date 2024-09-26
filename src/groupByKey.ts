type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const providedKey: string = String(item[key]);

    if (!result[providedKey]) {
      result[providedKey] = [];
    }

    result[providedKey].push(item);
  });

  return result;
}
