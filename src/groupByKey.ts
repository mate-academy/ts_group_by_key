type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const keyValue = item[key] as keyof GroupsMap<T>;

    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }

    acc[keyValue].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
