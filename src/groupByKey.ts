export function groupByKey<T>(items: T[], key: keyof T): Record<string, T[]> {
  const result: Record<string, T[]> = {};

  for (const item of items) {
    const keyValue = item[key] as unknown as string;

    if (!result[keyValue]) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);
  }

  return result;
}
