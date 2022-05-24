type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element: T) => {
    const keyValue = String(element[key]);

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(element);
  });

  return result;
}
