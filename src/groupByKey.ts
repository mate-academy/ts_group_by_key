export function groupByKey<T>(items: T[], key: keyof T): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((acc, curr) => {
    const currKey = String(curr[key]);

    (acc[currKey] ??= []).push(curr);

    return acc;
  }, {});
}
