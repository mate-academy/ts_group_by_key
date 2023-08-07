type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const value = item[key] as string;

    return {
      ...groups,
      [value]: [...(groups[value] || []), item],
    };
  }, {});
}
