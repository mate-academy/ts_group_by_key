type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const resultKey = String(item[key]);

    result[resultKey] = result[resultKey]
      ? [...result[resultKey], item] : [item];
  });

  return result;
}
