type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, curr: T) => {
    const itemKey = String(curr[key]);

    if (!acc[itemKey]) {
      acc[itemKey] = [];
    }

    acc[itemKey].push(curr);

    return acc;
  }, {});
}
