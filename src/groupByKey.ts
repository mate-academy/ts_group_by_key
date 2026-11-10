export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): Record<string, T[]> {
  const result: Record<string, T[]> = {};

  for (const item of items) {
    const groupKey: string = String(item[key]);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  }

  return result;
}
