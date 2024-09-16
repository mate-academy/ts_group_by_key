type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (result[value] === undefined) {
      result[value] = [item];
    } else {
      result[value].push(item);
    }
  });

  return result;
}
