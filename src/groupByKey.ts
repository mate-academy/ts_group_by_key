type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups, item) => {
    const keyValue = item[key] as string;

    return {
      ...groups,
      [keyValue]: [...(groups[keyValue] || []), item],
    };
  }, {} as GroupsMap<T>);
}
