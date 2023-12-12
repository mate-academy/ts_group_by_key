type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T): void => {
    const valueStr = String(item[key]);

    if (!result[valueStr]) {
      result[valueStr] = [];
    }

    result[valueStr].push(item);
  });

  return result;
}
