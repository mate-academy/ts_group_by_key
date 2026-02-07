type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, unknown>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((acc, item) => {
    const groupValue = String(item[key]);

    if (!acc[groupValue]) {
      acc[groupValue] = [];
    }

    acc[groupValue].push(item);

    return acc;
  }, {});
}
