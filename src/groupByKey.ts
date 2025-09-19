export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): Record<string, T[]> {
  const result: Record<string, T[]> = {};

  for (const item of items) {
    const keyValue = String(item[key]);

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);
  }

  return result;
}
