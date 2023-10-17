type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.map((item) => {
    const newKey = item[key] as string;

    if (!grouped[newKey]) {
      grouped[newKey] = [item];
    } else {
      grouped[newKey].push(item);
    }

    return grouped;
  });

  return grouped;
}
