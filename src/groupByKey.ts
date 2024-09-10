type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce(
    (acc: GroupsMap<T>, item: T) => {
      if (key in item) {
        const keyValue = item[key];
        const keyStr = String(keyValue);

        acc[keyStr] = acc[keyStr] || [];
        acc[keyStr].push(item);
      }

      return acc;
    },
    Object.create(null) as GroupsMap<T>,
  );
}
