type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const grupo = String(item[key]);

    if (!acc[grupo]) {
      acc[grupo] = [];
    }

    acc[grupo].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
