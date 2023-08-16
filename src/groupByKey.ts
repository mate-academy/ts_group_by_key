type GroupsMap<T> = {
  [key: string]: T[]; // Array<T>
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey: string = String(item[key]);

    if (!result[currentKey]) {
      result[currentKey] = [];
    }
    result[currentKey].push(item);
  });

  return result;
}
