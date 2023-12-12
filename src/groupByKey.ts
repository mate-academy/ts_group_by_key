type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((
    prev: GroupsMap<T>,
    current: T,
  ) => {
    const valueStr = String(current[key]);
    const total = { ...prev };

    if (!total[valueStr]) {
      total[valueStr] = [];
    }

    total[valueStr].push(current);

    return total;
  }, {});
}
