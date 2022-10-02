type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keysValue = `${item[key]}`;

    if (!result[keysValue]) {
      result[keysValue] = [];
    }

    result[keysValue].push(item);
  });

  return result;
}
