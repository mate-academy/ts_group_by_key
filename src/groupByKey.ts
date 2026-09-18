export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): Record<string, T[]> {
  const result: Record<string, T[]> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  });

  return result;
}
