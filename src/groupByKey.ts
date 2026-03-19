export function groupByKey<T extends Record<string, any>>(
  arr: T[],
  key: keyof T,
): Record<string, T[]> {
  return arr.reduce(
    (acc, item) => {
      const keyValue = String(item[key]);

      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }

      acc[keyValue].push(item);

      return acc;
    },
    {} as Record<string, T[]>,
  );
}
