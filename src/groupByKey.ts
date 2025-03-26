type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const resultItem = String(item[key]);

    if (!result[resultItem]) {
      result[resultItem] = [];
    }
    result[resultItem].push(item);
  });

  return result;
}
