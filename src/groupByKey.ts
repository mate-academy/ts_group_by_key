type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;

  return items.reduce((newGroup, item) => {
    const currentKey = item[key] as string;
    const group = newGroup[currentKey] || [];

    return {
      ...newGroup,
      [currentKey]: [...group, item],
    };
  }, {} as GroupsMap<T>);
}
