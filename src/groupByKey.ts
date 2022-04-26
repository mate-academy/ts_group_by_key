type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((elem) => {
    const currentKey = String(elem[key]);

    if (!result[currentKey]) {
      result[currentKey] = [];
    }

    result[currentKey].push(elem);
  });

  return result;
}
