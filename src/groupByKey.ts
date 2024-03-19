type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const grouped: Record<string, T[]> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (!grouped[keyValue]) {
      grouped[keyValue] = [item];
    } else {
      grouped[keyValue].push(item);
    }
  });

  return grouped;
}
