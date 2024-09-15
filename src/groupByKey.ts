type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prev, curr) => {
    const itemKey = curr[key] as string;

    return {
      ...prev,
      [itemKey]: prev[itemKey]
        ? [...prev[itemKey], curr]
        : [curr],
    };
  }, {} as GroupsMap<T>);
}
