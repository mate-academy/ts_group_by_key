type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  // write code here;

  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = item[key] as unknown as string;

    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(item);
  });

  return grouped;
}
