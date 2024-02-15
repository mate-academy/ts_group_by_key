type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = String(item[key]);

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);
  });

  return result;
}
