type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyValue = String(item[key]);

    if (!result[keyValue]) {
      result[keyValue] = [item];
    } else {
      result[keyValue] = [...result[keyValue], item];
    }
  });

  return result;
}
