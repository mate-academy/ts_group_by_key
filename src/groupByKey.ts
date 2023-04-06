type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups, item) => {
    const value = item[key];
    const group = groups[value as string] || [];

    return {
      ...groups,
      [value as string]: [...group, item],
    };
  }, {} as GroupsMap<T>);
}
