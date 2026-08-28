export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): Record<string, T[]> {
  return items.reduce(
    (result, item) => {
      const value = String(item[key]);

      if (!result[value]) {
        result[value] = [];
      }

      result[value].push(item);

      return result;
    },
    {} as Record<string, T[]>,
  );
}
