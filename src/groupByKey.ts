type GroupsMap<T> = Record<string, T[]>;

// I've been thinking about a stricter way for types
// but this will make code less understandable for others

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const group = items.reduce((acc, curr) => {
    const groupKey = String(curr[key]);

    (acc[groupKey] = acc[groupKey] || []).push(curr);

    return acc;
  }, {} as GroupsMap<T>);

  return group;
}
