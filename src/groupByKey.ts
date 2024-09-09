type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = String(item[key]);

    if (!result[currentKey]) {
      result[currentKey] = [];
    }
    result[currentKey].push(item);
  });

  return result;
}
