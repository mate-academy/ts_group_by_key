export function groupByKey<T>(items: T[], key: keyof T): Record<string, T[]> {
  const grouped = items.reduce(
    (acc, e: T) => {
      const v = String(e[key]);

      if (!acc[v]) {
        acc[v] = [];
      }
      acc[v].push(e);

      return acc;
    },
    {} as Record<string, T[]>,
  );

  return grouped;
}
