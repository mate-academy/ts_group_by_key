type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupItems: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyValue = item[key] as string;

    groupItems[keyValue] = groupItems[keyValue] || [];

    groupItems[keyValue].push(item);
  });

  return groupItems;
}
