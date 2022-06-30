type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = String(item[key]);

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);
  });

  return result;
}
