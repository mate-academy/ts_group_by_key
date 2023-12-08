type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, Key extends keyof T>(
  items: T[],
  key: Key,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }

    result[item[key]].push(item);
  });

  return result;
}
