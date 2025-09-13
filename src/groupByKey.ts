export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): Record<string, T[]> {
  const grouped: Record<string, T[]> = Object.create(null);

  for (const item of items) {
    const groupKey = String(item[key]);

    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }

    grouped[groupKey].push(item);
  }

  return grouped;
}
