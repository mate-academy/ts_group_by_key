type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const validKey = String(item[key]);

    if (validKey in result) {
      result[validKey].push(item);
    } else {
      result[validKey] = [item];
    }
  });

  return result;
}
