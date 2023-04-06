type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!grouped[value]) {
      grouped[value] = [];
    }

    grouped[value].push(item);
  });

  return grouped;
}
