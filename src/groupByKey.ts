type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  items.forEach((elem) => {
    const Key = String(elem[key]);

    if (!result[Key]) {
      result[Key] = [];
    }

    result[Key].push(elem);
  });

  return result;
}
