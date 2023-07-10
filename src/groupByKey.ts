type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((currentGroup, item) => {
    const groupKey = item[key] as string;
    const group = currentGroup[groupKey] || [];

    return {
      ...currentGroup,
      [groupKey]: [...group, item],
    };
  }, {} as GroupsMap<T>);
}
