type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends { [key: string]: string }>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const prev = acc[item[key]] ?? [];

    return {
      ...acc,
      [item[key]]: [...prev, item],
    };
  }, {} as GroupsMap<T>);
}
