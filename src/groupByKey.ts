type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T): void => {
    const keyValue = String(item[key]);

    if (keyValue in result) {
      result[keyValue].push(item);
    } else {
      result[keyValue] = [item];
    }
  });

  return result;
}
