type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentValue = String(item[key]);

    if (!result[currentValue]) {
      result[currentValue] = [];
    }

    result[currentValue].push(item);
  });

  return result;
}
