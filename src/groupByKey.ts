type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue: string = String(item[key]);

    if (result[keyValue]) {
      result[keyValue].push(item);
    } else {
      result[keyValue] = [item];
    }
  });

  return result;
}
