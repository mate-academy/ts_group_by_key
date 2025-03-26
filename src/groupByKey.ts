type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = items.reduce(
    (acc: GroupsMap<T>, currentItem: T) => {
      const itemKey = currentItem[key as keyof T];

      acc[itemKey as string] = acc[itemKey as string] || [];
      acc[itemKey as string].push(currentItem);

      return acc;
    },
    {},
  );

  return grouped;
}
