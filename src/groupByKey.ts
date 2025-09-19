export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): Record<string, T[]> {
  if (items.length === 0) return {};

  const result: Record<string, T[]> = {};

  for (const item of items) {
    const keyValue = item[key] !== null && item[key] !== undefined
      ? String(item[key])
      : 'null_or_undefined';

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);
  }

  return result;
}
