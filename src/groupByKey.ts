type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  arr: T[],
  key: keyof T,
): GroupsMap<T> {
  return arr.reduce((acc, curr) => {
    const groupKey = String(curr[key]);

    return {
      ...acc,
      [groupKey]: [...(acc[groupKey] || []), curr],
    };
  }, {} as GroupsMap<T>);
}
