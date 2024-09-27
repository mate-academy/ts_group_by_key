type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key];

    if (result[keyValue]) {
      result[keyValue].push(item);
    } else {
      result[keyValue] = [item];
    }
  });

  return result;
}
