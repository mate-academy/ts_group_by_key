type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key];

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);
  });

  return result;
}
